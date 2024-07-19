import { CardProductSugges } from "../../../../../../../ecommerce/pages/public/products/presentation/components/card-product/CardProductSugges"
import { CardProductSuggesList } from "../../../../../../../ecommerce/pages/public/products/presentation/components/card-product/CardProductSuggesList"
import Styles from "./scss/suggested.module.scss";
import { UseSuggestedPage } from "./view-model/UseSuggested"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { HiViewColumns } from "react-icons/hi2";
import { FaList } from "react-icons/fa6";
import { useEcommerceStore } from "../../../../../../../ecommerce/common/infrastructure/store"
import Swal from 'sweetalert2'
import { useState } from "react";
export const Suggested = () => {
    const { configPage, products } = UseSuggestedPage()
    const { addProductToCart } = useEcommerceStore();
    const [typeSelected, setTypeSelected] = useState(true)
    const uploadTocart = () => {

        products.map((product) => {
            addProductToCart({ ...product, quantity: product.quantity_suggested });
        })
        Swal.fire({
            icon: "success",
            title: "Productos cargados con exito",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div>
            <div className={Styles.ProductListContainer}>
                <div className={Styles.ProductListContent}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4 className="title fadeIn">Tus productos sugeridos</h4>
                        {typeSelected ? <FaList className={Styles.iconType} onClick={() => setTypeSelected(!typeSelected)} /> :
                            <HiViewColumns className={Styles.iconType} onClick={() => setTypeSelected(!typeSelected)} />
                        }
                    </div>
                    <div className={Styles.uploadCart} onClick={() => uploadTocart()}>
                        <h4 style={{ marginRight: "10px" }}>Cargar todo</h4><MdOutlineShoppingCartCheckout size={30} />
                    </div>
                    {products.length > 0 ? (
                        <>
                            {typeSelected ? (
                                <div className={`${Styles.ProductList} ${Styles['vertical']}`}>
                                    {products.map((product, index) => (
                                        <CardProductSugges
                                            sizeCardRow="small"
                                            key={`${product.code}-${index}`}
                                            product={product}
                                            type={configPage.card_product_type}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className={`${Styles.ProductList} ${Styles['horizontal']}`}>
                                    {products.map((product, index) => (
                                        <CardProductSuggesList
                                            sizeCardRow="small"
                                            key={`${product.code}-${index}`}
                                            product={product}
                                            type={configPage.card_product_type}
                                        />
                                    ))}
                                </div>

                            )}
                        </>
                    ) : <h4>No hay productos</h4>}
                </div>
            </div>
        </div>
    )
}

