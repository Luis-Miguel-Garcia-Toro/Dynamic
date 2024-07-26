import { useEffect, useState } from "react";
import Styles from "./scss/order.module.scss";
import moment from "moment";
import { LoadingFull } from "../../../../../../../../common/presentation/components";
import { Button, Modal } from 'antd';

const OrderMovil = ({ orders }) => {

    const [dateOrders, setDateOrders] = useState();
    const [loader, setLoader] = useState(true)
    const [detailsItem, setDetailsItem] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);


    const getdetail = (item) => {
        setDetailsItem(item)
        setIsModalOpen(true)
    }

    useEffect(() => {
        const dates = orders.map(item => moment(item.created_at).format('DD/MM/YYYY'));
        const uniqueDates = [...new Set(dates)];
        setDateOrders(uniqueDates)
        setLoader(false)
    }, [orders])


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {loader ? (
                <LoadingFull show={loader} />
            ) : (
                <>
                    {dateOrders && (
                        dateOrders.map((dateItem) => (
                            <div>
                                <p key={dateItem} className={Styles.dateOrder}>{dateItem}</p>
                                {orders.map((item, index) => (
                                    <>
                                        {moment(item.created_at).format('DD/MM/YYYY') === dateItem && (
                                            <div className={Styles.card} onClick={() => getdetail(item.detail)}>
                                                <div className={Styles.titleAndPriced}>
                                                    <h5>Pedido N°</h5>
                                                    <p>{item.document}</p>
                                                </div>
                                                <div className={Styles.titleAndPriced}>
                                                    <h5>Valor:</h5>
                                                    <p className={Styles.price}> {' $' +
                                                        new Intl.NumberFormat('en', {
                                                            // @ts-ignore
                                                            numberingSystem: 'latn',
                                                            style: 'decimal',
                                                            currency: 'COP'
                                                        }).format(Math.round(item.total))}</p>
                                                </div>
                                                <div className={Styles.titleAndPriced}>
                                                    <h5>Estado</h5>
                                                    <p style={{ color: item.state === 0 ? 'orange' : 'green', fontWeight: '700' }}>
                                                        {item.state === 0 ? 'Pendiente' : 'enviado ERP'}
                                                    </p>
                                                </div>

                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>
                        ))
                    )}
                    <div className={Styles.details}>
                        <Modal title="Detalle de Pedido"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            cancelButtonProps={{ style: { display: 'none' } }}
                            okText="Aceptar">
                            {detailsItem && detailsItem.length > 0 && (
                                <>
                                    {detailsItem.map((detail) => (
                                        <div className={Styles.card}>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Codigo </h5>
                                                <p className={Styles.price}>{detail.product_id}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Nombre </h5>
                                                <p className={Styles.price}>{detail.title}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Presentación </h5>
                                                <p className={Styles.price}>{detail.presentation.embalaje}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Kls </h5>
                                                <p className={Styles.price}>{detail.weight}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Cantidad </h5>
                                                <p className={Styles.price}>{detail.quantity}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>valor Iva </h5>
                                                <p className={Styles.price}>{' $' +
                                                    new Intl.NumberFormat('en', {
                                                        // @ts-ignore
                                                        numberingSystem: 'latn',
                                                        style: 'decimal',
                                                        currency: 'COP'
                                                    }).format(detail.total_tax)}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Imp.Azucarados </h5>
                                                <p className={Styles.price}> {' $' +
                                                    new Intl.NumberFormat('en', {
                                                        // @ts-ignore
                                                        numberingSystem: 'latn',
                                                        style: 'decimal',
                                                        currency: 'COP'
                                                    }).format(detail.total_tax2)}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Precio con impuestos</h5>
                                                <p className={Styles.price}>  {' $' +
                                                    new Intl.NumberFormat('en', {
                                                        // @ts-ignore
                                                        numberingSystem: 'latn',
                                                        style: 'decimal',
                                                        currency: 'COP'
                                                    }).format(
                                                        detail.price +
                                                        detail.total_tax / detail.quantity +
                                                        detail.total_tax2 / detail.quantity +
                                                        detail.tax3_percentage
                                                    )}</p>
                                            </div>
                                            <div className={Styles.titleAndPriced}>
                                                <h5>Valor total</h5>
                                                <p className={Styles.price} style={{ color: 'var(--color-primary)' }}>
                                                    {' $' +
                                                        new Intl.NumberFormat('en', {
                                                            // @ts-ignore
                                                            numberingSystem: 'latn',
                                                            style: 'decimal',
                                                            currency: 'COP'
                                                        }).format(
                                                            (detail.price +
                                                                detail.total_tax / detail.quantity +
                                                                detail.total_tax2 / detail.quantity +
                                                                detail.tax3_percentage) *
                                                            detail.quantity
                                                        )}
                                                </p>
                                            </div>

                                        </div>
                                    ))}


                                </>
                            )}
                        </Modal>
                    </div>
                </>
            )}

        </div>

    )
}

export default OrderMovil