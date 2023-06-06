import { useState } from "react"

type Product = {
  id: number
  name: string
  category: string
  released: boolean
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const teste = new URLSearchParams(window.location.search)

  async function handleSubmit(category: string) {
    const response = await fetch(`http:////172.12.169.108:3000?category=${category}`)
    const data = await response.json()
    setProducts(data)
  }

  return (
    <>
      {teste.get('search') && teste.get('search')}
      <form action='get'>
        <select name="category" id="1" defaultValue="" onChange={(event) => handleSubmit(event.target.value)}>
          <option value="" disabled>Selecione uma categoria</option>
          <option value="alimento">Alimento</option>
          <option value="vestuário">Vestuário</option>
        </select>
      </form>

      <div>
        {products.map(product =>
          <p key={product.id}>{product.name}</p>
        )}
      </div>
    </>
  )
}

export default App
