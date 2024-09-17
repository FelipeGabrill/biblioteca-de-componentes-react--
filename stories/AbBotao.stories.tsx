import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbBotao, AbBotaoProps } from "../src";

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Templete: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />

export const Primario = Templete.bind({})

Primario.args = {
    texto: 'Ab Botão Primário',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Templete.bind({})

Secundario.args = {
    texto: 'Ab Botão Secundário',
    tipo: 'secundario'
} as AbBotaoProps
