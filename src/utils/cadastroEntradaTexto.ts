const sessoes = [
    {
        id:1,
        titulo:"Dados da unidade",
        entradaTexto:[
            {
                id:1,
                label:"Nome da unidade",
                placeholder:"Insira o nome da unidade"
            },
            {
                id:2,
                label:"CPNJ",
                placeholder:"Insira o CPNJ da unidade"
            },
            {
                id:3,
                label:"Parceiro Futturis",
                placeholder:"Insira o nome do parceiro Futturis"
            }
        ],
        checkBox:[
            {
                id:1,
                value:"Implantação"
            },
            {
                id:2,
                value:"Atualização"
            },
            {
                id:3,
                value:"Reagendamento"
            }
        ]
    },
    {
        id:2,
        titulo:"Dados da Projeto",
        entradaTexto:[
            {
                id:1,
                label:"Atendimento Técnico",
                placeholder:"Insira o nome da unidade"
            },
            {
                id:2,
                label:"Atendimento Remoto",
                placeholder:"Insira o CPNJ da unidade"
            }
        ],
        checkBox:[
            {
                id:1,
                value:"Portaria Remora"
            },
            {
                id:2,
                value:"Portaria Local"
            },
            {
                id:3,
                value:"Portaria Fácil"
            }
        ]
    }

]

export {sessoes}