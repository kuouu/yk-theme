import React from 'react';
import {
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'

import SubscribeButton from './SubscribeBtn';

const SubscribeModal = ({ userId }: { userId: number }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} colorScheme='teal' size={'lg'}>方案內容</Button>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>訂閱制！</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						訂閱服務內容...
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='gray' variant='ghost' mr={3} onClick={onClose}>
							取消
						</Button>
						<SubscribeButton userId={userId} />
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SubscribeModal;