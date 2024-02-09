import { useState } from 'react';

export const useModal = () => {
    //Modal Product//
    const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);
    const [isOpenModalDetailProduct, setIsOpenModalDetailProduct] =
        useState(false);

    //Modal Categorie//
    const [isOpenModalCreateCategorie, setIsOpenModalCreateCategorie] =
        useState(false);

    //Modal Size//
    const [isOpenModalCreateSize, setIsOpenModalCreateSize] = useState(false);

    return [
        isOpenModalAddProduct,
        setIsOpenModalAddProduct,
        isOpenModalDetailProduct,
        setIsOpenModalDetailProduct,
        isOpenModalCreateCategorie,
        setIsOpenModalCreateCategorie,
        isOpenModalCreateSize,
        setIsOpenModalCreateSize,
    ];
};
