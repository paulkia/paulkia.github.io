export function Logo({ address, type }) {
  return (
    <a href={address} target="_blank" rel="noreferrer">
      <span className={"bi bi-" + type}></span>
    </a>
  );
}

export function Link({ address, text }) {
  return (
    <a href={address} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
