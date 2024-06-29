import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import defaultAvatar from '../../app/assets/unicorn.png';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm'
import { selectCurrentUser, setCurrentUser } from './userSlice';
import './UserLoginForm.module.css';

const UserLoginForm = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const currentUser = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();

    type LoginValues = {
        username: string;
        password: string;
    }

    const handleLogin = (values: LoginValues) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    }

    return (
        <>
            <span className='navbar-text ml-auto'>
                {currentUser ? (
                    <div style={{ width: '4rem', height: '4rem' }}>
                        <img
                            src={currentUser.avatar}
                            alt="user"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                ) : (
                    <Button
                        outline
                        onClick={() => setLoginModalOpen(true)}
                        style={{ color: 'white', border: '1px solid white' }}
                    >
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                )}
            </span>
            <Modal isOpen={loginModalOpen} toggle={() => setLoginModalOpen(false)}>
                <ModalHeader toggle={() => setLoginModalOpen(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={handleLogin}
                        validate={validateUserLoginForm}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor='username'>Username</Label>
                                    <Field
                                        id='username'
                                        name='username'
                                        placeholder='Username'
                                        className='form-control'
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                    <ErrorMessage name='username'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>Password</Label>
                                    <Field
                                        type='password'
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control'
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <ErrorMessage name='password'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' color='primary'>
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default UserLoginForm;
