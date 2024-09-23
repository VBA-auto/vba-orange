import React from "react";

const Page = () => {
  return (
    <main className="py-8">
      <div className="container max-w-screen-xl mx-auto">
        <div className="">
          <h1 className="text-center text-3xl font-semibold mb-5 text-[#424242]">
            COOKIES
          </h1>
        </div>
        <div className="mb-5">
          <h2 className="text-lg text-[#424242] font-semibold">
            Gestion des cookies
          </h2>
          <p className="text-[#424242]">
            Pourquoi utilisons-nous les cookies ?
          </p>
          <p className="text-[#424242] mt-2">
            Lorsque vous naviguez sur le site carrière de PARALLELISME 91, des
            cookies sont déposés sur votre navigateur afin d’améliorer votre
            expérience et de nous permettre de réaliser des études sur le volume
            de trafic et accroître la pertinence de nos publicités en ligne.
            Pour certains d’entre eux votre consentement est nécessaire,
            d’autres sont des cookies techniques obligatoires pour naviguer sur
            nos sites. En voici le détail : Cookies de fonctionnement
            (obligatoire) :
          </p>
          <p className="font-semibold mt-2 text-[#424242]">
            PARALLELISME 91{" "}
            <span className="font-normal">
              utilise des cookies strictement nécessaires au fonctionnement de
              ce site internet, ainsi que des cookies pour mesurer la
              performance du contenu publié et pour améliorer notre
              compréhension du marché. Nos partenaires utilisent des traceurs
              afin d’afficher de la publicité personnalisée en fonction de votre
              navigation et de votre profil. Si vous cliquez sur "Tout accepter"
              ci-dessous, vous pourrez modifier vos préférences à tout moment en
              cliquant sur l'icône de cookie en bas à gauche de votre écran
              lorsque vous poursuivrez votre navigation. Si vous ne cliquez pas
              sur "Tout accepter", seuls les cookies strictement nécessaires au
              fonctionnement du site seront utilisés, même si cette fenêtre
              disparaît. Vous pouvez vous y opposer et les supprimer en
              utilisant les paramètres de votre navigateur, cependant votre
              expérience utilisateur risque d’être dégradée et certains de nos
              services inaccessibles.
            </span>
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            Cookies de performance :
          </h2>
          <p className=" text-[#424242]">
            Ces cookies nous permettent de déterminer le nombre de visites et
            les sources du trafic, afin de mesurer et d’améliorer les
            performances de notre site Web. Ils nous aident également à
            identifier les pages les plus / moins visitées et d’évaluer comment
            les visiteurs naviguent sur le site Web. Toutes les informations
            collectées par ces cookies sont agrégées et donc anonymisées. Si
            vous n'acceptez pas ces cookies, nous ne serons pas informés de
            votre visite sur notre site.Cookies de suivi d’audience :
          </p>

          {/* ================================= */}

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            Google Analytics
          </h2>
          <ul
            style={{
              listStyle: "inherit",
              paddingLeft: "20px",
              color: "#424242",
            }}
          >
            <li>Google Tag Manager </li>
            <li>
              Des boutons de partage (Facebook, Instagram, Twitter, LinkedIn,
              Viadéo)
            </li>
            <li>Des contenus de plateformes sociales (Twitter, Medium)</li>
            <li>Des vidéos (Youtube, Dailymotion, Viméo)</li>
            <li>Indeed Conversion</li>
          </ul>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            Les cookies de ciblage publicitaires :
          </h2>
          <p className=" text-[#424242]">
            Ces cookies peuvent être mis en place au sein de notre site Web par
            nos partenaires publicitaires. Ils peuvent être utilisés par ces
            sociétés pour établir un profil de vos intérêts et vous proposer des
            publicités pertinentes sur d'autres sites Web. Ils ne stockent pas
            directement des données personnelles, mais sont basés sur
            l'identification unique de votre navigateur et de votre appareil
            Internet. Si vous n'autorisez pas ces cookies, votre publicité sera
            moins ciblée.
          </p>
          <p className=" text-[#424242] my-2">
            Cookies de ciblage publicitaire :
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            Durée de conservation des cookies :
          </h2>
          <p className=" text-[#424242]">
            Les cookies sont conservés pour une durée maximale de 12 mois à
            compter de leur dépôt sur votre navigateur. A l’expiration de ce
            délai, votre consentement sera à nouveau requis.
          </p>
          <p className=" text-[#424242]">
            Pour en savoir plus sur les cookies et leur incidence sur votre
            expérience de navigation, vous pouvez consulter le site de la CNIL.
            Pour en savoir plus sur le traitement de vos données personnelles,
            consultez notre charte.
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            6. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.
          </h2>
          <p className=" text-[#424242]">
            Toute reproduction, représentation, publication, adaptation de tout
            ou partie des éléments du site et/ou de l’application mobile
            associée, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable de : Click & Trust.
          </p>
          <p className=" text-[#424242] my-2">
            Toute exploitation non autorisée du site et/ou de l’application
            mobile associée ou de l’un des éléments qu’ils contiennent sera
            considérée comme constitutive d’une contrefaçon et poursuivie
            conformément aux dispositions des articles L.335-2 et suivants du
            Code de Propriété Intellectuelle.
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            7. LIMITATIONS DE RESPONSABILITÉ.
          </h2>
          <p className=" text-[#424242]">
            PARALLELISME 91 ne pourra être tenue responsable des dommages
            directs et indirects causés au matériel de l’utilisateur, lors de
            l’accès au site www.parallelisme.fr et/ou à l’application mobile
            associée, et résultant soit de l’utilisation d’un matériel ne
            répondant pas aux spécifications indiquées au point 4, soit de
            l’apparition d’un bug ou d’une incompatibilité.
          </p>
          <p className=" text-[#424242] my-2">
            PARALLELISME 91 ne pourra également être tenue responsable des
            dommages indirects (tels par exemple qu’une perte de marché ou perte
            d’une chance) consécutifs à l’utilisation du site
            www.parallelisme.fr et/ou de l’application mobile associée.
          </p>
          <p className=" text-[#424242] my-2">
            Des espaces interactifs (possibilité de poser des questions dans
            l’espace contact) sont à la disposition des utilisateurs.
            PARALLELISME 91 se réserve le droit de supprimer, sans mise en
            demeure préalable, tout contenu déposé dans cet espace qui
            contreviendrait à la législation applicable en France, en
            particulier aux dispositions relatives à la protection des données.
            Le cas échéant, PARALLELISME 91 se réserve également la possibilité
            de mettre en cause la responsabilité civile et/ou pénale de
            l’utilisateur, notamment en cas de message à caractère raciste,
            injurieux, diffamant, ou pornographique, quel que soit le support
            utilisé (texte, photographie…).
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            8. GESTION DES DONNÉES PERSONNELLES.
          </h2>
          <p className=" text-[#424242]">
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l’article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995.
          </p>
          <p className=" text-[#424242] my-2">
            A l’occasion de l’utilisation du site www.parallelisme.fr et/ou de
            l’application mobile associée, peuvent êtres recueillies : l’URL des
            liens par l’intermédiaire desquels l’utilisateur a accédé au site
            www.parallelisme.fr et l’adresse de protocole Internet (IP) de
            l’utilisateur.
          </p>
          <p className=" text-[#424242] my-2">
            En tout état de cause PARALLELISME 91 ne collecte des informations
            personnelles relatives à l’utilisateur que pour le besoin de
            certains services proposés par le site www.parallelisme.fr et/ou
            l’application mobile associée. L’utilisateur fournit ces
            informations en toute connaissance de cause, notamment lorsqu’il
            procède par lui-même à leur saisie. Il est alors précisé à
            l’utilisateur l’obligation ou non de fournir ces informations.
          </p>
          <p className=" text-[#424242] my-2">
            Conformément aux dispositions des articles 38 et suivants de la loi
            78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
            aux libertés, tout utilisateur dispose d’un droit d’accès, de
            rectification et d’opposition aux données personnelles le
            concernant, en effectuant sa demande écrite et signée, accompagnée
            d’une copie du titre d’identité avec signature du titulaire de la
            pièce, en précisant l’adresse à laquelle la réponse doit être
            envoyée au 118 ROUTE DE VERSAILLES - 91160 CHAMPLAN.
          </p>
          <p className=" text-[#424242] my-2">
            Aucune information personnelle de l’utilisateur du site
            www.parallelisme.fr et/ou de l’application mobile associée n’est
            publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou
            vendue sur un support quelconque à des tiers. Seule l’hypothèse du
            rachat de PARALLELISME 91 et de ses droits permettrait la
            transmission des dites informations à l’éventuel acquéreur qui
            serait à son tour tenu de la même obligation de conservation et de
            modification des données vis à vis de l’utilisateur du site
            www.parallelisme.fr et/ou de l’application mobile.
          </p>
          <p className=" text-[#424242] my-2">
            Les bases de données sont protégées par les dispositions de la loi
            du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
            relative à la protection juridique des bases de données.
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            9. LES PRINCIPALES LOIS CONCERNÉES.
          </h2>
          <p className=" text-[#424242]">
            Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n°
            2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et
            aux libertés.
          </p>
          <p className=" text-[#424242] my-2">
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie
            numérique.
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            10. LEXIQUE.
          </h2>
          <p className=" text-[#424242]">
            Utilisateur : Internaute se connectant, utilisant le site ou
            l’application susnommé.
          </p>
          <p className=" text-[#424242] my-2">
            Informations personnelles : « les informations qui permettent, sous
            quelque forme que ce soit, directement ou non, l’identification des
            personnes physiques auxquelles elles s’appliquent » (article 4 de la
            loi n° 78-17 du 6 janvier 1978).
          </p>

          <h2 className="text-lg text-[#424242] font-semibold mt-2">
            11. PARTENAIRES :
          </h2>
          <p className=" text-[#424242]">
            Email du Délégué protection des données : contact@parallelisme.fr
          </p>
          <p className=" text-[#424242] my-2">
            Le site parallelisme.fr est hébergé par : 02SWITCH
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
