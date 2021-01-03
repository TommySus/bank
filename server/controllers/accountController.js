const { Account,Customer } = require('../models')

class AccountController {
    static showCustomerAccount (req,res) {
        Account.findAll({where: {CustomerId:req.params.idCustomer}})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static addCustomerAccount (req,res) {
        const obj = {
            type: req.body.type,
            balance: req.body.balance,
            accountNumber: req.body.accountNumber,
            CustomerId: req.params.idCustomer
        }
        Account.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static transferAccount (req,res) {
        const balance1 = {
            balance: req.body.balance1
        }
        const balance2 = {
            balance: req.body.balance2
        }
        Account.update(balance1,{where:{id: req.params.idAccount}})
        .then(data => {
            res.status(201).json({message: 'transfer success!'})
            return Account.update(balance2,{where:{id: req.body.idAccount2}})
                .then(data2 => {
                    res.status(201).json({message: 'transfer success!'})
                })
                .catch(error => {
                    res.status(500).json({message: 'internal server error'})
                })
        })
        .catch(error => {
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = AccountController