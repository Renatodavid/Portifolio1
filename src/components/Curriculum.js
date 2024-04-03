import React from 'react';

class DownloadCVButton extends React.Component {
    constructor(props) {
        super(props);
        this.downloadCV = this.downloadCV.bind(this);
    }

    downloadCV() {
        // URL do currículo estático 
        const staticCVUrl = "../assets/img/FullstackEspecializandoEmBackEnd.pdf";

        // URL do currículo no Google Drive 
        const googleDriveCVUrl = "https://drive.google.com/file/d/1OepZXQ4W_eegjm-snd5dpRbwl3Ib1YIQ/view?usp=sharing";

        // Se o currículo estático estiver disponível, faça o download dele
        if (staticCVUrl) {
            this.downloadFile(staticCVUrl);
        } else {
            // Caso contrário, abra o currículo do Google Drive em uma nova guia
            window.open(googleDriveCVUrl, "_blank");
        }
    }

    downloadFile(url) {
        const link = document.createElement("a");
        link.href = url;
        link.download = "FullstackEspecializandoEmBackEnd.pdf"; // Nome do arquivo a ser baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <button className="btn btn-light btn-lg btn-block" onClick={this.downloadCV}>
                Download CV
            </button>
        );
    }
}

export default DownloadCVButton;
