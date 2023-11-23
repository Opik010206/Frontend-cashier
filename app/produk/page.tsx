export const metadata = {
    tittle: "Produk",
  }
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

  type Produk = {
    id: number,
    name: string,
    category: {
        id: number,
        nama: string
    }
    price: number,
    stock: number,
    tag: string,
    image: string,

  }
  
  type Category = {
    id: number;
    nama: string;
  }
  
  const getCategory = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/category');
    return res.data.data
  }
  const getProduk = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/produk');
    return res.data.data
  }
  
  const CategoriList = async () => {
    const category: Category[] = await getCategory()
    const produk: Produk[] = await getProduk()
    console.log(produk);
    return (
      <div>
        {/* Categori List */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produk.map((produk,index) => (
                <div className="card bg-blue-50 p-5 m-3 rounded-md">
                    <Image src="/makanan.jpg" width={100} height={100} alt='Gambar' className="w-screen h-[100px] mb-1" />
                    <h3 className='text-[1.5rem] font-semibold max-w-fit'>
                        <Link href={`/produk/${produk.id}`} key={produk.id}>
                            {produk.name}
                        </Link>
                    </h3>
                    <p className='description mb-3'>{produk.tag}</p>
                    <section className='flex justify-between items-center'>
                        <span className='py-1 px-2 bg-blue-600 rounded-sm text-[.8rem] text-white'>{produk.category.nama}</span>
                        <p className='text-blue-500'><span>Rp</span> {produk.price}</p>
                    </section>
                </div>
            ))}
        </div>
      </div>
    )
  }
  
  export default CategoriList
  
  // rafce rfc
  