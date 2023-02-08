const FormEmail = () => {
  return (
    <form className="flex flex-col gap-3 mt-5">
      <input
        type="email"
        placeholder="email anda"
        className="py-3 px-4 focus:border-purple-400 bg-milk-white rounded-md w-full focus:outline-2 focus:outline-milk-cyan text-milk-coffe"
      />
      <input
        type="text"
        placeholder="subject email"
        className="py-3 px-4 focus:border-purple-400 bg-milk-white rounded-md w-full focus:outline-2 focus:outline-milk-cyan text-milk-coffe"
      />
      <textarea
        rows="6"
        cols="6"
        placeholder="pesan anda"
        className="py-3 px-4 focus:border-purple-400 bg-milk-white rounded-md w-full focus:outline-2 focus:outline-milk-cyan text-milk-coffe"
      />
    </form>
  );
};

export default FormEmail;
