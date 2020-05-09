import React from "react";
import BookList from "../book-lis";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
    );
};

export default HomePage;