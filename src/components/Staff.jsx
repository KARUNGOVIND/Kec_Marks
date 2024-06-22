import React, { useEffect, useState } from 'react';
import './Staff.css';

function Staff() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);
    const [deleteTerm, setDeleteTerm] = useState("");
    const [update, setUpdate] = useState({
        id: null, name: "", Language: null, English: null, Maths: null, Science: null, Cs: null
    });

    useEffect(() => {
        const product = [
            { id: 1, name: 'Sam', Language: 100, English: 100, Maths: 98, Science: 90, Cs: 98 },
            { id: 2, name: 'Tom', Language: 91, English: 92, Maths: 92, Science: 94, Cs: 98 },
            { id: 3, name: 'Kane', Language: 87, English: 89, Maths: 98, Science: 90, Cs: 98 },
            { id: 4, name: 'Sunny', Language: 89, English: 94, Maths: 98, Science: 90, Cs: 98 },
            { id: 5, name: 'Roman', Language: 90, English: 78, Maths: 98, Science: 90, Cs: 98 },
            { id: 6, name: 'Punk', Language: 88, English: 80, Maths: 98, Science: 90, Cs: 98 },
            { id: 7, name: 'Mark', Language: 90, English: 79, Maths: 98, Science: 90, Cs: 98 },
            { id: 8, name: 'Altman', Language: 96, English: 81, Maths: 98, Science: 90, Cs: 98 },
            { id: 9, name: 'Henry', Language: 95, English: 87, Maths: 98, Science: 90, Cs: 98 },
            { id: 10, name: 'Nagul', Language: 100, English: 88, Maths: 98, Science: 90, Cs: 98 }
        ];

        const productsWithTotal = product.map(p => ({
            ...p,
            total: p.Language + p.English + p.Maths + p.Science + p.Cs
        }));

        setProducts(productsWithTotal);
        setFilteredProducts(productsWithTotal);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleSortClick = () => {
        const sorted = [...filteredProducts].sort((a, b) =>
            sortAscending ? a.total - b.total : b.total - a.total
        );
        setFilteredProducts(sorted);
        setSortAscending(!sortAscending);
    };

    const handleDeleteChange = (event) => {
        setDeleteTerm(event.target.value);
    };

    const handleDeleteClick = () => {
        const updatedProducts = products.filter(product =>
            product.name.toLowerCase() !== deleteTerm.toLowerCase()
        );
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
        setDeleteTerm("");
    };

    const handleUpdateChange = (e) => {
        setUpdate((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleUpdateClick = () => {
        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => 
                product.id === update.id ? { ...product, ...update, total: update.Language + update.English + update.Maths + update.Science + update.Cs } : product
            );
            setFilteredProducts(updatedProducts);
            return updatedProducts;
        });
    };

    return (
        <div className='top'>
            <div className="App">
                <h1>Student Grades</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by name..."
                    />
                    <button onClick={handleSearchClick}>Search</button>
                    <button onClick={handleSortClick}>
                        {sortAscending ? "Sort by Descending" : "Sort by Ascending"}
                    </button>
                </div>
                <div className="delete-bar">
                    <input
                        type="text"
                        value={deleteTerm}
                        onChange={handleDeleteChange}
                        placeholder="Enter name to delete..."
                    />
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
                <div className="update-bar">
                    <input type="number" placeholder="id" onChange={handleUpdateChange} name="id" />
                    <input type="text" placeholder="name" onChange={handleUpdateChange} name="name" />
                    <input type="number" placeholder="Language" onChange={handleUpdateChange} name="Language" />
                    <input type="number" placeholder="English" onChange={handleUpdateChange} name="English" />
                    <input type="number" placeholder="Maths" onChange={handleUpdateChange} name="Maths" />
                    <input type="number" placeholder="Science" onChange={handleUpdateChange} name="Science" />
                    <input type="number" placeholder="Cs" onChange={handleUpdateChange} name="Cs" />
                    <button onClick={handleUpdateClick}>Update</button>
                </div>
                <div className="product-list">
                    <h2>Data-Base</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Language</th>
                                <th>English</th>
                                <th>Maths</th>
                                <th>Science</th>
                                <th>Cs</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.Language}</td>
                                    <td>{product.English}</td>
                                    <td>{product.Maths}</td>
                                    <td>{product.Science}</td>
                                    <td>{product.Cs}</td>
                                    <td>{product.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Staff;
