'use client'
import { useTranslation } from 'react-i18next'

import dress from '../../../public/dress.jpeg'
import blackDress from '../../../public/download1.jpeg'
import afghanGirl from '../../../public/afghangirl.jpeg'
import lawangDress from '../../../public/download7.jpeg'
import jewelry1 from '../../../public/jwelery.jpeg'
import afghanNecklace from '../../../public/Afghannecklace.jpeg'
import jewelrySet from '../../../public/download14.jpeg'
import vintageBracelet from '../../../public/bangle.jpeg'
import blackDress2 from '../../../public/download2.jpeg'
import jewelry2 from '../../../public/download3.jpeg'
import woolCoat from '../../../public/Vintage Suzani Shearling Coat.jpeg'
import chapan from '../../../public/download11.jpeg'

const useProducts = () => {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      image: dress,
      title: t('products.title1'),
      price: "$269.10"
    },
    {
      id: 2,
      image: blackDress,
      title: t('products.title2'),
      price: "$300"
    },
    {
      id: 3,
      image: afghanGirl,
      title: t('products.title3'),
      price: "$107.10"
    },
    {
      id: 4,
      image: lawangDress,
      title: t('products.title4'),
      price: "$69.00"
    },
    {
      id: 5,
      image: jewelry1,
      title: t('products.title5'),
      price: "$100"
    },
    {
      id: 6,
      image: afghanNecklace,
      title: t('products.title6'),
      price: "$31.50"
    },
    {
      id: 7,
      image: jewelrySet,
      title: t('products.title7'),
      price: "$55.10"
    },
    {
      id: 8,
      image: vintageBracelet,
      title: t('products.title8'),
      price: "$69.00"
    },
    {
      id: 9,
      image: blackDress2,
      title: t('products.title9'),
      price: "$269.10"
    },
    {
      id: 10,
      image: jewelry2,
      title: t('products.title10'),
      price: "$31.50"
    },
    {
      id: 11,
      image: chapan,
      title: t('products.title11'),
      price: "$44.10"
    },
    {
      id: 12,
      image: woolCoat,
      title: t('products.title12'),
      price: "$69.00"
    }
  ];

  return products;
}

export default useProducts;
