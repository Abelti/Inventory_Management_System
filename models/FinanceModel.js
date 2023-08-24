const addSchema = {
    ID: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: [true, 'Please enter the product name']
    },
    itemPrice: {
        type: String,
        required: [true, 'Please enter the product price']
    },
    itemUnit: {
        type: String,
        required: [true, 'Please enter the product unit']
    },
    itemPurchaserName: {
        type: String,
        required: [true, 'Please enter the product purchaser name']
    },
    iterPurchaserAddress: {
        PhoneNumber: {
            type: String,
            required: [true, 'Please enter the phone number']
        },
        email: {
            type: String,
            required: [true, 'Please enter the email address']
        }
    },
    itemProductCategory: {
        type: String,
        required: [true, 'Please enter the product category']
    },
    itemProductionDate: {
        type: Date,
        required: [true, 'Please enter the production date']
    },
    itemExpirationDate: {
        type: Date,
        required: [true, 'Please enter the expiration date']
    },
    itemBatchNumber: {
        type: Date,
        required: [true, 'Please enter the batch number']
    },
    itemSupplier: {
        supplierName: {
            type: String,
            required: [true, 'Please enter the supplier name']
        },
        supplierAddress: {
            PhoneNumber: {
                type: String,
                required: [true, 'Please enter the product name']
            },
            email: {
            type: String,
            required: [true, 'Please enter the product name']
            },
            physicalAddress: {
            type: String,
            required: [true, 'Please enter the product name']
            },
            supplierCompanyName: {
            type: String,
            required: [true, 'Please enter the product name']
            }
        }
    },
    itemRemark: {
        type: String,
        required: [true, 'Please enter the product name']
    }
}