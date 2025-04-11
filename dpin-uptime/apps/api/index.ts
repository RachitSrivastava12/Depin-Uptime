import express from "express";
import { authenticate } from "./middleware";
import { prismaClient } from "db/client";
const app = express();

app.use(express.json());



app.post("/api/v1/website",authenticate, async (req, res) => {
    const userId = req.userId!;
    const url = req.body.url;
 const data = await prismaClient.website.create({
        data: {
            userId,
            url
        }
    });
    res.json(data.id);
}); 
app.get("/api/v1/website/status",authenticate, async (req, res) => {
    const websiteId = req.query.websiteId as unknown as string;
    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId: req.userId!,
            disabled: false
        },
        include :{
            ticks : true
        }
    });
    res.json(data);
});
app.get("/api/v1/websites", authenticate,async(req, res) => {
    const userId = req.userId!;
    const data = await prismaClient.website.findMany({
        where: {
            userId,
            disabled: false  
        }
});
    res.json(data);
});
app.delete("/api/v1/website/:websiteId",authenticate, async (req, res) => {
    const websiteId = req.body.websiteId;
    const userId = req.userId!;
  await  prismaClient.website.update({
        where: {
            id: websiteId,
            userId
        },
        data: {
            disabled: true
        }
    }).then(() => {
        console.log("Website deleted successfully");
    }).catch((error) => {
        console.error("Error deleting website:", error);
    });
    res.json({ message: "Website deleted successfully" });
}
);

app.listen(3000, () => {    
    console.log("Server is running on port 3000");
}   );