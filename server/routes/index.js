const express = require("express")
const router = express.Router()
const AccountController = require('../controllers/accountController')
const CustomerController = require('../controllers/customerController')

router.get("/customers",CustomerController.showCustomer)
router.post("/customers/register",CustomerController.addCustomer)
router.put("/customers/:idCustomer/editProfile",CustomerController.editCustomer)
router.get("/customers/:idCustomer/accounts",AccountController.showCustomerAccount)
router.post("/customers/:idCustomer/accounts",AccountController.addCustomerAccount)
router.patch("/customers/:idCustomer/accounts/:idAccount/transfer",AccountController.transferAccount)

module.exports = router