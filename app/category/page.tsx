export const metadata = {
  tittle: "Category",
}
import axios from 'axios'
import Link from 'next/link'

type Category = {
  id: number;
  nama: string;
}

const getCategory = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/category');
  return res.data.data
}

const CategoriList = async () => {
  const category: Category[] = await getCategory()
  return (
    <div>
      Categori List
      <ul>
        {category.map((category,index) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <li>{category.nama}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CategoriList

// rafce rfc
