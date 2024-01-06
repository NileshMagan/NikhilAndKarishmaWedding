type Props = {
    url: string;
    children: any;
}

const CustomButton = ({ url, children }: Props): JSX.Element => {

    return (
        <div 
          className="button" 
          onClick={() =>
            window.open(
              url,
              "_blank"
            )
          }>
            <span>
                {children}
            </span>
        </div>
    )
}

export default CustomButton;