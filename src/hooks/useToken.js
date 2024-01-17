function useToken() {
  const token = sessionStorage.getItem("token");
  return token;
}

export default useToken;
