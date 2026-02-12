const Item = () => <li>Texto do Item</li>

function ComponentesFilhos() {
    return (
        <div>
            <ol>
                <Item/>
            </ol>
        </div>
    )
}

export default ComponentesFilhos;