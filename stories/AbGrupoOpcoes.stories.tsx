import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from "../src";

export default {
    title: 'Componentes/AbBotao',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Templete: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Padrao = Templete.bind({})

Padrao.args = {
    opcoes: [   
        {
            id: 1,
            titulo:'E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo:'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo:'Impresso + E-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        }
    ]   
} as AbGrupoOpcoesProps
