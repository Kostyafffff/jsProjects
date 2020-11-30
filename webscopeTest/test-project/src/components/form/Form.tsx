import React, { useState } from 'react';

import { FormWrapper, TextWrapper } from '../text-component/styles';
import { TextComponent } from '../text-component/TextComponent';
import { Link } from '../link/Link';
import { CheckBox } from '../checkbox/CheckBox';
import { Label } from '../label/Label';

export const Form: React.FC = () => {
    const [userEmail, setUserName] = useState('');
    const [userPassword, setUserPasswordName] = useState('');

    const handleUserNameInput = (e: any): void => {
        e.preventDefault();
        setUserName(e.target.value);
    };

    const handleUserPassword = (e: any): void => {
        e.preventDefault();
        setUserPasswordName(e.target.value);
    };

    const infoPasswordName = () => {
        console.info(userEmail);
        console.info(userPassword);

        setUserName('')
        setUserPasswordName('')
    }

    return (
        <FormWrapper>
        <form>
              <TextWrapper >
               <TextComponent text={'Log In to Example'}/>
               <Link
                   className={'header-link'}
                   url={'sssss'}
                   linkText={'or create an account'}
               />
               </TextWrapper>
               <Label
                   className={'label-top'}
                   text={'E-mail'}
                   type={'text'}
                   value={userEmail}
                   placeholder={'e.g. john.doe@gmail.com'}
                   onChange={handleUserNameInput}
               />
               <Label
                   text={'Password'}
                   type={'password'}
                   value={userPassword}
                   placeholder={'●●●●●●●●●●●●●'}
                   onChange={handleUserPassword}
               />
               <div className={'checkbox-wrapper'}>
                    <CheckBox className={'checkbox-wrapper'}/>
                    <div className={'terms-wrapper'}>
                        <span>Agree with</span>
                        <a href="#"> Terms & conditions</a>
                    </div>
               </div>
               <input
                   className={'login-btn'}
                   value={'Login'}
                   type={'button'}
                   onClick={infoPasswordName}
               />
               <Link
                   className={'forgotten-password'}
                   url={'#'}
                   linkText={'Forgotten password?'}
               />
            </form>
        </FormWrapper>
    )
}
