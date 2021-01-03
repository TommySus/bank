const { Customer } = require('../models')

class CustomerController {
    static showCustomer (req,res) {
        Customer.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static addCustomer (req,res) {
        const obj = {
            identityNumber: req.body.identityNumber,
            fullName: req.body.fullName,
            address: req.body.address,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            updatedAt: new Date,
            createdAt: new Date
        }
        Customer.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editCustomer (req,res) {
        const obj = {
            identityNumber: req.body.identityNumber,
            fullName: req.body.fullName,
            address: req.body.address,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            updatedAt: new Date,
            createdAt: new Date
        }
        Customer.update(obj, {where: {id: req.params.idCustomer}})
        .then(data => {
            res.status(201).json({message: 'data edited!'})
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = CustomerController