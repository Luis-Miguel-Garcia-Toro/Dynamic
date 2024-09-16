import Styles from "./scss/category.module.scss";
import loreal from '../../../../../../../assets/icon/LOreal.jpg'

export const CategorySection = () => {

    const data = [
        {
            "code": 173,
            "descripcion": "quesos",
            "img": "https://www.svgrepo.com/show/395996/cheese-wedge.svg"
        },
        {
            "code": 93,
            "descripcion": "Leches",
            "img": "https://www.svgrepo.com/show/484355/milk-carton.svg"
        },
        {
            "code": 39,
            "descripcion": "Cremas",
            "img": "https://www.svgrepo.com/show/300740/hair-cream-cream.svg"
        },
        {
            "code": 42,
            "descripcion": "Esparcibles ",
            "img": "https://www.svgrepo.com/show/395956/butter.svg"
        },
        {
            "code": 41,
            "descripcion": "Yogurt",
            "img": "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            "code": 40,
            "descripcion": "Jugos",
            "img": "https://www.svgrepo.com/show/276572/juice.svg"
        }
    ]

    const dataMark = [
        {
            code: 1,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 2,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 3,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 4,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 5,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 6,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        },
        {
            code: 7,
            img: "https://www.svgrepo.com/show/1637/yogurt.svg"
        }
    ]

    const dataFilter = [
        {
            code: 1,
            description: "Categorías"
        },
        {
            code: 2,
            description: "Marcas"
        },
        {
            code: 3,
            description: "Recomendados"
        }
    ]
    return (
        <div>
            <div className={Styles.filterContainer}>
                {dataFilter.map((item) => (
                    <div className={Styles.filterItem} key={item.code}>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
            <div className={Styles.markContainer}>
                {(dataMark || []).map((category) => (
                    <div className={`${Styles.CategoriesItem} fadeIn`} key={category.descripcion} onClick={() => window.location.href = 'products?category=' + category.code}>
                        <figure>
                            {/* <img src={category.img == null ? 'https://www.svgrepo.com/show/355481/milk.svg' : category.img} /> */}
                            <img src={category.img == null ? 'https://www.svgrepo.com/show/355481/milk.svg' : category.img} />
                        </figure>
                        <span>{category.descripcion}</span>
                    </div>
                ))}
            </div>
            <div className={Styles.categorySectionContainer}>
                {data.map((item) => (
                    <div className={Styles.categoryItem} key={item.code}>
                        <figure>
                            <img src={item.img} alt={item.descripcion} />
                        </figure>
                        <span>{item.descripcion}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

