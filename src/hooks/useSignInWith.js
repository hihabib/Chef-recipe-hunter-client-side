import useAuth from "./useAuth";

const useSignInWith = () => {
  const { signInWithGoogle } = useAuth();

  return (provider) => {
    switch (provider) {
      case "google":
        signInWithGoogle();
        break;
    }
  };
};

export default useSignInWith;
