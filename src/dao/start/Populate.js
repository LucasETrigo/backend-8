import { knex } from '../../db.js';

const productos = [
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Air Jordan 1 Retro High OG',
        price: 100,
        description: 'Zapatillas de baloncesto',
        code: 'XY-1',
        image: 'google.com',
        stock: 150,
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Christian Louboutin',
        price: 200,
        description: 'Zapatillas de vestir',
        code: 'XY-2',
        image: 'google.com',
        stock: 250,
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Nike Air Force 1',
        price: 300,
        description: 'Zapatillas de vestir',
        code: 'XY-3',
        image: 'google.com',
        stock: 350,
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        title: 'Nike Air Max 90',
        price: 400,
        description: 'Zapatillas de vestir',
        code: 'XY-4',
        image: 'google.com',
        stock: 450,
    },
];

const carritos = [
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    },
    {
        timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    },
];

const productoCarritoRelations = [
    {
        carritoId: 2,
        productoId: 1,
    },
    {
        carritoId: 2,
        productoId: 2,
    },
    {
        carritoId: 2,
        productoId: 3,
    },
];

export async function populateProducts() {
    try {
        await knex.insert(productos).from('producto');
        console.log('Productos agregados');
    } catch (error) {
        console.log(error);
    }
}

export async function populateCarts() {
    try {
        await knex.insert(carritos).from('carrito');
        console.log('Carritos agregados');
    } catch (error) {
        console.log(error);
    }
}

export async function populateProductoCarrito() {
    try {
        await knex.insert(productoCarritoRelations).from('productoCarrito');
        console.log('Relaciones agregadas');
        return;
    } catch (error) {
        console.log(error);
    }
}
