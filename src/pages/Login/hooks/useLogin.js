import useAuth from "../../../hooks/useAuth";

const useLogin = () => {
  const { signInWithGoogle } = useAuth();

  const signInWith = (provider) => {
    switch (provider) {
      case "google":
        signInWithGoogle();
        break;
    }
  };
  return { signInWith };
};
export default useLogin;
