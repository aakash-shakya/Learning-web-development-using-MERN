import postMessage from '../models/postMessage.js'


export const getPosts = async (req, res) => {
    try{
        const postMessages = await postMessage.find()

        res.status(200).json(postMessages);

    } catch(error){
        res.status(400).json({message: error.message});
    }
}


export const createPost = (req, res) => {
    const newPostMessage = req.body
    const newStock = new postMessage(newPostMessage);

    try{
        newStock.save();

        res.status(201).json(newPostMessage);
    } catch(error){
        res.status(409).json({ message: error.message })
    }
}