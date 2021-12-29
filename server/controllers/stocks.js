import stock from '../models/stock.js'


export const getStocks = async (req, res) => {
    try{
        const stockItems = await stock.find()

        res.status(200).json(stockItems);

    } catch(error){
        res.status(400).json({message: error.message});
    }
}


export const postStock = (req, res) => {
    const stockItem = req.body
    const newStock = new stock(stockItem);

    try{
        newStock.save();

        res.status(201).json(newStock);
    } catch(error){
        res.status(409).json({ message: error.message })
    }
}