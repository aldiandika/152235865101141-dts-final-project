import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPokeList, pokeListState } from "../reducers/PokeListSlice";
import MyPokemonList from "./MyPokemon_list";

const MyPokemonPage = () => {
  const dispatch = useDispatch();
  // const [pokeList, setPokeList] = useState([]);
  const pokeListData = useSelector(pokeListState);

  useEffect(() => {
    let tempList = JSON.parse(localStorage.getItem("my_poke"));
    if (tempList) {
      dispatch(getMyPokeList({ pokeList: tempList }));
    }
  }, []);

  return (
    <>
      <Box className="root-container">
        <Navbar />
        <MyPokemonList />
      </Box>
      <Footer />
    </>
  );
};

export default MyPokemonPage;
