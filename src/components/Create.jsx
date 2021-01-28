import React from "react"
import { useTranslation } from "react-i18next"
import useForm from "../hooks/useForm"
import DisplayCrud from "./DisplayCrud"

export default function Create() {
    const { state, onHandlerInput, onHandlerSubmit } = useForm()
    const {t} = useTranslation()

    return (
        <>
            <form onSubmit={onHandlerSubmit}>
                <input 
                    onChange={onHandlerInput}
                    value={state}
                    
                />
                <button type="submit">{t('add')}</button>
            </form>
            <DisplayCrud />
        </>
    )
}
