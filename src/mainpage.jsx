import { useState } from "react"
import Header from "./header";
import Footer from "./footer";



function Library()  {
  const [books, setBooks] = useState([
    { id: 1, title: "مقدمة ابن خلدون", author: "ابن خلدون", isbn: "1289499030" },
    { id: 2, title: "الحاوي في الطب", author: "ابو بكر الرازي", isbn: "893847239479" },
    { id: 3, title: "الف ليلة وليلة", author: "غير معروف", isbn: "9780140449396" },
    { id: 4, title: "النقد الأدبي", author: "طه حسين", isbn: "9770911824" },
    { id: 5, title: "المعلقات", author: "عمرو بن كلثوم", isbn: "9770701155" },
    { id: 6, title: "ديوان المتنبي", author: "أبو الطيب المتنبي", isbn: "9789953419516" },
    { id: 7, title: "الأغاني", author: "أبو الفرج الأصفهاني", isbn: "9770913804" },
    { id: 8, title: "تفسير الأحلام", author: "ابن سيرين", isbn: "9789953272234" },
    { id: 9, title: "القرآن الكريم", author: "غير معروف", isbn: "9781597843004" },
    { id: 10, title: "الأدب الكبير", author: "ابن المقفع", isbn: "9789770932947" },
    { id: 11, title: "رسائل إخوان الصفا", author: "إخوان الصفا", isbn: "9789770933074" },
    { id: 12, title: "الكامل في اللغة والأدب", author: "المبرد", isbn: "9789953263072" },
    { id: 13, title: "ديوان أبي نواس", author: "أبو نواس", isbn: "9789953271909" },
    { id: 14, title: "البيان والتبيين", author: "الجاحظ", isbn: "9789953271237" },
    { id: 15, title: "العقد الفريد", author: "ابن عبد ربه", isbn: "9789770931483" },
    { id: 16, title: "ألفية ابن مالك", author: "ابن مالك", isbn: "9789953273224" },
    { id: 17, title: "شرح ديوان الحماسة", author: "البحتري", isbn: "9789953273378" },
    { id: 18, title: "النقد الأدبي الحديث", author: "شكري عياد", isbn: "9789770932541" },
    { id: 19, title: "معجم لسان العرب", author: "ابن منظور", isbn: "9789770933319" },
    { id: 20, title: "الطب النبوي", author: "ابن قيم الجوزية", isbn: "9789953273774" }
    ]);

   
    
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <>
            <Header />
            <div style={styles.container}>
                {books.map((book) => (
                    <div
                        key={book.id}
                        style={hoveredCard === book.id ? { ...styles.bookCard, ...styles.bookCardHover } : styles.bookCard}
                        onMouseEnter={() => handleMouseEnter(book.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 style={styles.title}>{book.title}</h2>
                        <p style={styles.text}>{book.author}</p>
                        <p style={styles.text}>{book.isbn}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        padding: '20px',
    },
    bookCard: {
        backgroundColor: '#f0f8ff',
        border: '2px solid olive',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    bookCardHover: {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#e6f7ff',
    },
    title: {
        fontSize: '18px',
        margin: '10px 0',
        color: 'olive',
    },
    text: {
        fontSize: '14px',
        color: '#555',
    },
};

export default Library ;