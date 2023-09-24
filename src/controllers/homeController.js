import {
    Products
} from "../models/productModel.js"

export const home = (req, res) => {
    res.json({
        message: "api funcionando"
    })
}

export const getAllProducts = async (req, res) => {
    try {
        const produto = await Products.find({})
        if (!produto) {
            res.status(404).json({
                message: "Nenhum produto foi encontrado"
            })
        }
        res.status(200).json({
            produto
        })
    } catch (error) {
        res.status(500).json({
            erro: error
        })
    }
}

export const createProducts = async (req, res) => {
    const {
        title,
        price,
        image,
        category
    } = req.body
    const produto = {
        title,
        price,
        image,
        category
    }
    try {
        if (produto) {
            await Products.create(produto)
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
    res.status(201).json({
        produto,
        message: "Produto criado com sucesso"
    })
}


export const getProductById = async (req, res) => {
    const {
        id
    } = req.params
    try {
        const produtoEncontrado = await Products.findById(id)
        if (!produtoEncontrado) {
            res.status(404).json({
                message: "produto nao foi encontrado"
            })
            return
        }
        res.status(200).json({
            produto: produtoEncontrado,
            message: "Produto encontrado com sucesso"
        })
    } catch (error) {
        return res.status(500).json({
            erro: error
        })
    }

}

export const updateProduct = async (req, res) => {
    const {
        id
    } = req.params;
    const updateData = req.body;

    try {
        // Verifique se o produto existe
        const existingProduct = await Products.findById(id);

        if (!existingProduct) {
            return res.status(404).json({
                message: 'Produto não encontrado'
            });
        }

        // Atualize o produto
        const updatedProduct = await Products.findByIdAndUpdate(id, updateData, {
            new: true
        });

        res.status(200).json({
            produto: updatedProduct,
            message: 'Produto atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};

export const deleteProduct = async (req, res) => {
    const {
        id
    } = req.params
    try {
        const productExit = await Products.findById(id)
        if (!productExit) {
            return res.status(404).json({
                message: 'Produto não encontrado'
            });
        }
        const produto = await Products.findByIdAndRemove(id)
        res.status(200).json({
            message: "Produto removido com sucesso"
        })
    } catch (error) {
        res.status(500).json({
            erro: error
        })
    }
}

export const getByCategory = async (req, res) => {
    const { category } = req.params;
  
    try {
      const products = await Products.find({ category });
  
      if (products.length === 0) {
        return res.status(404).json({ message: 'Nenhum produto encontrado para esta categoria' });
      }
  
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  };