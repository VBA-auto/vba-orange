import Head from "next/head";
import Link from "next/link";

import Breadcrumb from "../components/BreadCumb";

const Page = () => {
  return (
    <section className="">
      <Head>
        <title>boite automatique mention légales</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>

      <div id="main" className="container mx-auto mb-16">
        <div className="mt-16 mb-8">
          <Breadcrumb />
        </div>
        <div>
          {/* <h1 className="text-center text-4xl">Mentions Légales</h1> */}
          <div className="">
            <h1 className="text-gray-500 text-md font-semibold">
              1. PRÉSENTATION DU SITE.
            </h1>
            <p className="my-2">
              En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l&apos;économie numérique, il est précisé
              aux utilisateurs du site www.xxxxx.frl&apos;identité des
              différents intervenants dans le cadre de sa réalisation et de son
              suivi :
            </p>
            <div className="">
              <h2 className="text-gray-500 text-lg font-semibold">
                Créateur :{" "}
                <Link
                  className="text-[#f1b04e]"
                  href="https://clickandtrust.fr/"
                >
                  {" "}
                  clickandtrust.fr
                </Link>
              </h2>
              <h2 className="text-gray-500 text-lg font-semibold">
                Responsable publication :{" "}
                <Link
                  className="text-[#f1b04e]"
                  href="https://clickandtrust.fr/"
                >
                  {" "}
                  Click & Trust – contact@xxxxxx.fr
                </Link>
              </h2>
              <p>
                Le responsable publication est une personne physique ou une
                personne morale.
              </p>
              <h2 className="text-gray-500 text-lg font-semibold">
                Webmaster :{" "}
                <Link
                  className="text-[#f1b04e]"
                  href="https://clickandtrust.fr/"
                >
                  {" "}
                  Click & Trust – contact@xxxxxx.fr
                </Link>
              </h2>
              <h2 className="text-gray-500 text-lg font-semibold">
                Hébergeur :<span className=""> 02Switch</span>
              </h2>
              <p className="my-2">
                Le modèle de mentions légales est offert par{" "}
                <Link className="text-[#f1b04e]" href="https://subdelirium.com">
                  Subdelirium.com
                </Link>{" "}
                Générateur de mentions légales
              </p>
            </div>
            <h1 className="text-gray-500 text-md font-semibold">
              2. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES
              PROPOSÉS.
            </h1>
            <p className="my-2">
              L’utilisation du site www.XXX.com implique l’acceptation pleine et
              entière des conditions générales d’utilisation ci-après décrites.
              Ces conditions d’utilisation sont susceptibles d’être modifiées ou
              complétées à tout moment, les utilisateurs du site www.XXX.com
              sont donc invités à les consulter de manière régulière.
            </p>
            <p className="my-2">
              Ce site est normalement accessible à tout moment aux utilisateurs.
              Une interruption pour raison de maintenance technique peut être
              toutefois décidée par XXX, qui s’efforcera alors de communiquer
              préalablement aux utilisateurs les dates et heures de
              l’intervention.
            </p>
            <p className="my-2">
              Le site www.XXX.com est mis à jour régulièrement par XXX. De la
              même façon, les mentions légales peuvent être modifiées à tout
              moment : elles s’imposent néanmoins à l’utilisateur qui est invité
              à s’y référer le plus souvent possible afin d’en prendre
              connaissance.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              3. DESCRIPTION DES SERVICES FOURNIS.
            </h1>
            <p className="my-2">
              Le site www.XXX.com a pour objet de fournir une information
              concernant l’ensemble des activités de la société.
            </p>
            <p className="my-2">
              XXX s’efforce de fournir sur le site www.XXX.com des informations
              aussi précises que possible. Toutefois, il ne pourra être tenue
              responsable des omissions, des inexactitudes et des carences dans
              la mise à jour, qu’elles soient de son fait ou du fait des tiers
              partenaires qui lui fournissent ces informations.
            </p>
            <p className="my-2">
              Tous les informations indiquées sur le site www.XXX.com sont
              données à titre indicatif, et sont susceptibles d’évoluer. Par
              ailleurs, les renseignements figurant sur le site www.XXX.com ne
              sont pas exhaustifs. Ils sont donnés sous réserve de modifications
              ayant été apportées depuis leur mise en ligne.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES.
            </h1>
            <p className="my-2">Le site utilise la technologie Nextjs.</p>
            <p className="my-2">
              Le site Internet ne pourra être tenu responsable de dommages
              matériels liés à l’utilisation du site. De plus, l’utilisateur du
              site s’engage à accéder au site en utilisant un matériel récent,
              ne contenant pas de virus et avec un navigateur de dernière
              génération mis-à-jour
            </p>

            <h1 className="text-gray-500 text-md font-semibold">
              5. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.
            </h1>
            <p className="my-2">
              XXX est propriétaire des droits de propriété intellectuelle ou
              détient les droits d’usage sur tous les éléments accessibles sur
              le site, notamment les textes, images, graphismes, logo, icônes,
              sons, logiciels.
            </p>
            <p className="my-2">
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de : Click and Trust.
            </p>
            <p className="my-2">
              Toute exploitation non autorisée du site ou de l’un quelconque des
              éléments qu’il contient sera considérée comme constitutive d’une
              contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              6. LIMITATIONS DE RESPONSABILITÉ.
            </h1>
            <p className="my-2">
              XXX ne pourra être tenue responsable des dommages directs et
              indirects causés au matériel de l’utilisateur, lors de l’accès au
              site www.XXX.com, et résultant soit de l’utilisation d’un matériel
              ne répondant pas aux spécifications indiquées au point 4, soit de
              l’apparition d’un bug ou d’une incompatibilité.
            </p>
            <p className="my-2">
              XXX ne pourra également être tenue responsable des dommages
              indirects (tels par exemple qu’une perte de marché ou perte d’une
              chance) consécutifs à l’utilisation du site www.XXX.com.
            </p>
            <p className="my-2">
              Des espaces interactifs (possibilité de poser des questions dans
              l’espace contact) sont à la disposition des utilisateurs. XXX se
              réserve le droit de supprimer, sans mise en demeure préalable,
              tout contenu déposé dans cet espace qui contreviendrait à la
              législation applicable en France, en particulier aux dispositions
              relatives à la protection des données. Le cas échéant, Click and
              Trust se réserve également la possibilité de mettre en cause la
              responsabilité civile et/ou pénale de l’utilisateur, notamment en
              cas de message à caractère raciste, injurieux, diffamant, ou
              pornographique, quel que soit le support utilisé (texte,
              photographie…).
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              7. GESTION DES DONNÉES PERSONNELLES.
            </h1>
            <p className="my-2">
              En France, les données personnelles sont notamment protégées par
              la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
              2004, l&apos;article L. 226-13 du Code pénal et la Directive
              Européenne du 24 octobre 1995.
            </p>
            <p className="my-2">
              A l&apos;occasion de l&apos;utilisation du site www.XXX.com,
              peuvent êtres recueillies : l&apos;URL des liens par
              l&apos;intermédiaire desquels l&apos;utilisateur a accédé au site
              www.XXX.com, le fournisseur d&apos;accès de l&apos;utilisateur,
              l&apos;adresse de protocole Internet (IP) de l&apos;utilisateur.
            </p>
            <p className="my-2">
              En tout état de cause AxElecAuto ne collecte des informations
              personnelles relatives à l&apos;utilisateur que pour le besoin de
              certains services proposés par le site www.XXX.com.
              L&apos;utilisateur fournit ces informations en toute connaissance
              de cause, notamment lorsqu&apos;il procède par lui-même à leur
              saisie. Il est alors précisé à l&apos;utilisateur du site
              www.XXX.com l’obligation ou non de fournir ces informations.
            </p>
            <p className="my-2">
              Conformément aux dispositions des articles 38 et suivants de la
              loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
              fichiers et aux libertés, tout utilisateur dispose d’un droit
              d’accès, de rectification et d’opposition aux données personnelles
              le concernant, en effectuant sa demande écrite et signée,
              accompagnée d’une copie du titre d’identité avec signature du
              titulaire de la pièce, en précisant l’adresse à laquelle la
              réponse doit être envoyée.
            </p>
            <p className="my-2">
              Aucune information personnelle de l&apos;utilisateur du site
              www.XXX.com n&apos;est publiée à l&apos;insu de
              l&apos;utilisateur, échangée, transférée, cédée ou vendue sur un
              support quelconque à des tiers. Seule l&apos;hypothèse du rachat
              de AxElecAuto et de ses droits permettrait la transmission des
              dites informations à l&apos;éventuel acquéreur qui serait à son
              tour tenu de la même obligation de conservation et de modification
              des données vis à vis de l&apos;utilisateur du site www.XXX.com.
            </p>
            <p className="my-2">
              Le site n&apos;est pas déclaré à la CNIL car il ne recueille pas
              d&apos;informations personnelles.
            </p>
            <p className="my-2">
              Les bases de données sont protégées par les dispositions de la loi
              du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
              relative à la protection juridique des bases de données.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              8. LIENS HYPERTEXTES ET COOKIES.
            </h1>
            <p className="my-2">
              Le site www.XXX.com contient un certain nombre de liens
              hypertextes vers d’autres sites, mis en place avec l’autorisation
              de AxElecAuto. Cependant, AxElecAuto n’a pas la possibilité de
              vérifier le contenu des sites ainsi visités, et n’assumera en
              conséquence aucune responsabilité de ce fait.
            </p>
            <p className="my-2">
              La navigation sur le site www.XXX.com est susceptible de provoquer
              l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un
              cookie est un fichier de petite taille, qui ne permet pas
              l’identification de l’utilisateur, mais qui enregistre des
              informations relatives à la navigation d’un ordinateur sur un
              site. Les données ainsi obtenues visent à faciliter la navigation
              ultérieure sur le site, et ont également vocation à permettre
              diverses mesures de fréquentation.
            </p>
            <p className="my-2">
              Le refus d’installation d’un cookie peut entraîner l’impossibilité
              d’accéder à certains services. L’utilisateur peut toutefois
              configurer son ordinateur de la manière suivante, pour refuser
              l’installation des cookies.
            </p>
            <p className="my-2">
              Sous Internet Explorer : onglet outil (pictogramme en forme de
              rouage en haut a droite) / options internet. Cliquez sur
              Confidentialité et choisissez Bloquer tous les cookies. Validez
              sur Ok.
            </p>
            <p className="my-2">
              Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le
              bouton Firefox, puis aller dans l&apos;onglet Options. Cliquer sur
              l&apos;onglet Vie privée. Paramétrez les Règles de conservation
              sur : utiliser les paramètres personnalisés pour
              l&apos;historique. Enfin décochez-la pour désactiver les cookies.
            </p>
            <p className="my-2">
              Sous Safari : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par un rouage). Sélectionnez
              Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section &apos;Confidentialité&apos;, cliquez sur Paramètres de
              contenu. Dans la section &apos;Cookies&apos;, vous pouvez bloquer
              les cookies.
            </p>
            <p className="my-2">
              Sous Chrome : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par trois lignes horizontales).
              Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
              avancés. Dans la section &apos;Confidentialité&apos;, cliquez sur
              préférences. Dans l&apos;onglet &apos;Confidentialité&apos;, vous
              pouvez bloquer les cookies.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              9. DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION.
            </h1>
            <p className="my-2">
              Tout litige en relation avec l’utilisation du site www.XXX.com est
              soumis au droit français. Il est fait attribution exclusive de
              juridiction aux tribunaux compétents de Paris.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              10. LES PRINCIPALES LOIS CONCERNÉES.
            </h1>
            <p className="my-2">
              Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
              2004-801 du 6 août 2004 relative à l&apos;informatique, aux
              fichiers et aux libertés.
            </p>
            <p className="my-2">
              Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique.
            </p>
            <h1 className="text-gray-500 text-md font-semibold">
              11. LEXIQUE.
            </h1>
            <p className="my-2">
              Utilisateur : Internaute se connectant, utilisant le site
              susnommé.
            </p>
            <p className="my-2">
              Informations personnelles : « les informations qui permettent,
              sous quelque forme que ce soit, directement ou non,
              l&apos;identification des personnes physiques auxquelles elles
              s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier
              1978).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
