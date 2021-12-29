import stock from '../models/stock.js'


export const getStocks = async (req, res) => {
    try{
        const stocks = await stock.find()

        res.status(200).json(stocks);

    } catch(error){
        res.status(400).json({message: error.message});
    }
}


export const postStock = (req, res) => {
    res.send('Post created');
}