import React, { useEffect, useState } from "react";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store"
import  AuthSuggested  from "../../../../../../../auth/suggested/AuthSuggested"
import { useAppStore } from "../../../../../../../../common/infrastructure/store/app.store";
export const UseSuggestedPage = () => {
    const configPage = useEcommerceStore((state) => state.configPages);
    const [products, setProducts] = useState([])
    const { user } = useAppStore();

    const getProducts = async () => {
        const response = await AuthSuggested(user.userToken,user.code)
        setProducts(response.data ? response.data : [])
    }

    useEffect(() => {
        getProducts()
    }, [])

    return {
        configPage,
        products
    }
}