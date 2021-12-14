
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateProductsUserInput {
    productId?: Nullable<string>;
    userId?: Nullable<string>;
    quantity?: Nullable<number>;
}

export interface CreateProductInput {
    title?: Nullable<string>;
    desc?: Nullable<string>;
    price?: Nullable<number>;
}

export interface SignUpInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface LoginInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface ProductsUser {
    _id?: Nullable<string>;
    productId?: Nullable<string>;
    userId?: Nullable<string>;
    quantity?: Nullable<number>;
}

export interface IQuery {
    productsByUser(userId?: Nullable<string>): Nullable<Product>[] | Promise<Nullable<Product>[]>;
    products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;
    login(loginInput: LoginInput): string | Promise<string>;
}

export interface IMutation {
    buyProduct(createProductsUserInput: CreateProductsUserInput): ProductsUser | Promise<ProductsUser>;
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    signUp(signUpInput: SignUpInput): User | Promise<User>;
}

export interface Product {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    desc?: Nullable<string>;
    price?: Nullable<number>;
}

export interface User {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
