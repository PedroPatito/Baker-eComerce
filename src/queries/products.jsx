import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export const getAllProducts = () => {
  const db = getFirestore();

  const collectionRef = collection(db, "Productos");
  return getDocs(collectionRef)
    .then((snapshot) => {
      const products = [];
      snapshot?.docs?.forEach((item) => {
        products.push({
          id: item.id,
          ...item.data(),
        });
      });

      return products;
    })
    .catch((error) => {
      return error;
    });
};

export const GetProductsByCategory = (db, category_id) => {
  const collectionRef = query(
    collection(db, "Productos"),
    where("identificador", "==", category_id)
  );
  return getDocs(collectionRef)
    .then((snapshot) => {
      const productsCategoria = [];
      snapshot?.docs?.forEach((item) => {
        productsCategoria.push({
          id: item.id,
          ...item.data(),
        });
      });
      return productsCategoria;
    })
    .catch((error) => {
      return error;
    });
};

export const GetProductById = (db, id) => {
  const documentRef = doc(db, "Productos", id);
  return getDoc(documentRef).then((snapShot) => {
    if (snapShot.exists) {
      
      return {
        id: snapShot.id,
        ...snapShot.data(),
      };
    }
  });
};

export const CrearOrden = (db, order, id = null) => {
  let tempId = null;
  if (id) {
    tempId = id;
  } else {
    tempId = `orden: ${Math.random()}`;
  }

  return setDoc(doc(collection(db, "ordenes")), order)
    .then((order) => {
    })
    .catch((error) => {
    });
};
