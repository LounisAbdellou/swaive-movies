// Libraries
import React from "react";

// Utilities
import { Box, Content, Header, Wrapper, Footer } from "@styles/modalStyle";
import { xMark } from "@assets/index.ts";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: JSX.Element | JSX.Element[];
};

type ModalHeaderProps = {
	onClose?: () => void;
	children?: JSX.Element | JSX.Element[] | string;
};

type ModalContentProps = {
	children?: JSX.Element | JSX.Element[] | string;
};

type ModalFooterProps = {
	children?: JSX.Element | JSX.Element[] | string;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	const modalChildren = React.Children.map(children, (child) => {
		return React.cloneElement(child, { onClose });
	});

	return isOpen ? (
		<Wrapper onClick={handleOutsideClick}>
			<Box>{modalChildren}</Box>
		</Wrapper>
	) : (
		<></>
	);
};

Modal.Header = ({ children, onClose }: ModalHeaderProps) => {
	return (
		<Header>
			<div>{children}</div>
			<img className="white-filter" onClick={onClose} src={xMark} alt="xMark" />
		</Header>
	);
};

Modal.Content = ({ children }: ModalContentProps) => {
	return <Content>{children}</Content>;
};

Modal.Footer = ({ children }: ModalFooterProps) => {
	return <Footer>{children}</Footer>;
};

export default Modal;
