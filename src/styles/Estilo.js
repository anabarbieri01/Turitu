import { Dimensions, StyleSheet } from "react-native"


const EstiloInicio = StyleSheet.create({

    ImagemFundo: {
        height: "100%",
        width: "100%",
    },

    FundoEspacamento: {
        alignItems: "center",
        flex: 1, 
        justifyContent: "center",
        gap: 32,
    },

    FundoEspacamentoImagem: {
        width: 300,
        objectFit: "cover",
        height: 140,
    },

    FundoEspacamentoLegenda: {
        color: "#274057",
        fontSize: 18,
        textAlign: "center"
    },

    BotaoTurista: {
        paddingVertical: 16, 
        borderRadius: 8,
        backgroundColor: "#274057",
        width: 280,
    },

    BotaoTuristaTexto: {
        fontFamily: "OpenSans",
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },

    BotaoOperador: {
        backgroundColor: "transparent",
        paddingVertical: 16, 
        paddingHorizontal: 64,
    },

    BotaoOperadorTexto: {
        fontFamily: "OpenSans",
        color: "#FAB533",
        fontSize: 18,
    }

});



const EstiloTurista = StyleSheet.create({

    Tela: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    Mapa: {
        height: Dimensions.get("window").height,
        flex: 1,
        width: "100%",
    },

    Barra: {
        flexDirection: "row",
        paddingHorizontal: 8,
        maxHeight: 104,
        borderBottomColor: "#FAB533",
        borderBottomWidth: 2,
    },

    BarraSelecao: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },

    BarraSelecaoImagem: {
        height: 32,
        width: 32,
    },

    BarraSelecaoCirculo: {
        backgroundColor: "#FAB533",
        borderRadius: 100,
        padding: 16,
        opacity: 0.6,
    },

    BarraSelecaoCirculoSelecionado: {
        backgroundColor: "#FAB533",
        borderRadius: 100,
        padding: 16,
    },

    BarraSelecaoTexto: {
        textAlign: "center",
        paddingTop: 8,
        fontSize: 16,
        color: "#274057",
        fontFamily: "OpenSans",
    },

    Principal: {
        flex: 1,
    },

    Postagem: {
        padding: 16,
    },

    PostagemImagem: {
        width: "100%", 
        borderRadius: 32,
        borderColor: "#FAB533",
        borderWidth: 4,
        height: 480,
    },

    PostagemTitulo: {
        fontSize: 32,
        color: "#274057",
        fontFamily: "OpenSans",
        paddingVertical: 8,
    },

    PostagemTexto: {
        fontSize: 15,
        color: "#274057",
        fontFamily: "OpenSans",
    },

});




const EstiloOperador = StyleSheet.create({

    Tela: {
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: "center",
    },

    TelaInterna: {
        alignItems: "center",
        flex: 1,        
        gap: 16,
        justifyContent: "center",
    },

    TelaAcesso: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#274057",
        borderRadius: 16,
        height: "95%",
        justifyContent: "center",
        padding: 16,
        gap: 16,
        position: "absolute",
        width: "95%",
        zIndex: 999,
    },

    AcessoTitulo: {
        color: "#FFF",
        fontFamily: "OpenSans",
        fontSize: 32,
        textAlign: "center",
    },

    AcessoEntrada: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        color: "#274057",
        fontFamily: "OpenSans",
        height: 42,
        textAlign: "center",
        minWidth: 280,
    },

    AcessoEntradaCoord: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        color: "#274057",
        fontFamily: "OpenSans",
        height: 42,
        textAlign: "center",
        flex: 1,
    },

    AcessoBotao: {
        backgroundColor: "#FAB533",
        borderRadius: 8,
        padding: 16,
    },

    AcessoBotaoTexto: {
        color: "#274057",
        fontFamily: "OpenSans",
    },

    AcessoSubtitulo: {
        color: "#274057",
        fontFamily: "OpenSans",
    },

    AcessoLogo: {
        height: 200,
        width: 200,
    },

    AcessoFormularioTitulo: {
        color: "#274057",
        fontFamily: "OpenSans",
        fontSize: 32,
        textAlign: "center",
    }

});


export {

    EstiloInicio,

    EstiloTurista,

    EstiloOperador,

};