"use client";

import { Button } from "@/components";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface FormValues {
    fullName: string;
    email: string;
    companyName: string;
    message: string;
}

const formInitialValues: FormValues = {
    companyName: "Don Benito",
    email: "flgorordo@gmail.com",
    fullName: "Fernando Gorordo",
    message: "Mensaje de prueba para formik.",
}

export const ContactForm = () => {
    return (
        <Formik initialValues={formInitialValues} onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => { console.log(values); setSubmitting(false) }}>
            <Form className="flex flex-col gap-6">

                <div className="flex flex-col gap-4">
                    <label htmlFor="fullName" className="text-headings font-bold text-lg">Nombre completo</label>
                    <Field id={"fullName"} name="fullName" placeholder="Jhon Doe" className="bg-background rounded-lg p-3 border border-input-stroke placeholder:text-placeholder" />
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-headings font-bold text-lg">Email</label>
                    <Field id={"email"} name="email" type="email" placeholder="jdoe@google.com" className="bg-background rounded-lg p-3 border border-input-stroke placeholder:text-placeholder" />
                </div>

                <div className="flex flex-col gap-4">
                    <label htmlFor="companyName" className="text-headings font-bold text-lg">Empresa</label>
                    <Field id={"companyName"} name="companyName" placeholder="Doe's S.A" className="bg-background rounded-lg p-3 border border-input-stroke placeholder:text-placeholder" />
                </div>
                
                <div className="flex flex-col gap-4">
                    <label htmlFor="message" className="text-headings font-bold text-lg">Mensaje</label>
                    <Field id={"message"} name="message"  placeholder="Escribe tu mensaje..." as="textarea" className="bg-background rounded-lg p-3 border border-input-stroke placeholder:text-placeholder h-[240px]" />
                </div>

                <Button buttonText="Enviar mensaje"  type="submit" size="large"/>
            </Form>
        </Formik>
    )
}
