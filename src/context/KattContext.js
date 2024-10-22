/* azt szeretnénk, hogy egyetlen helyen tudjuk kezelni, a "globális változókat"
nem lesz szükség "buborékoltatásra" az adatok több komponensen való átadásra
A context tartalmazza az állapotot, adatokat itt módosíthatjuk.
Provider tartalmazza az állpotot, adatokat itt módosíthatjuk és ezt rendeli hozzá a context
A provider az általa körbeölelt komponensek számára tudja átadni az adatokat.

useContext hook - itt mondjuk az egyes komponensekben, hogy melyik adatot akarjuk felhasználni
*/

import { createContext } from "react"
import { useState } from "react"
// létrehozzuk a context objektumot
export const KattContext = createContext("")
// létrehozunk egy providert ehhez a contexthez
export const KattProvider = ({children}) => {

  
  const [lista, setLista] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [lepes, setLepes] = useState(0)
  function katt(adat) {

    const slista = [...lista] // ne referenciát adjunk át, hanem másolatot készítünk

    
    if (lepes % 2 == 0) {
        slista[adat] = "X"
    } else {
        slista[adat] = "O"
    }
    console.log(lepes)
    let sv = lepes
    sv++
    setLepes(sv);
    // setLepes(lepes + 1)
    console.log(lepes)
    // 3. másolatot értékül adjuk az eredetinek
    setLista([...slista])


    console.log(lista)
  }


    return <KattContext.Provider value = {{lista, katt}}>
        {children}
    </KattContext.Provider>

}