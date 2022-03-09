
export type useModalProps = {
  title?: string;
};

export const useModal = ({ title }: useModalProps) => {
  return (
    <>
      <h1>Oi</h1>
      <p>{title}</p>
    </>
  );
};
