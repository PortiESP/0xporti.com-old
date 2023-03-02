import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar";
import { Callout, Code, Img, Paragraph, Quote, Section, Title, Title2, Title3, UList, Url } from "@/components/MarkupWidgets/Tags";
import { Gray } from "@/components/MarkupWidgets/tags/Colors";
import metadataList from "@/api/blog/postData"


const sections = [
    {
        id:"section--overview",
        label:"Overview"
    },
    {
        id:"section--setup",
        label:"Setup"
    },
    {
        id:"section--usage",
        label:"Open&Close"
    },
    {
        id:"section--boot",
        label:"Decrypt&mount on boot"
    }
]


// <Head />
export const metadata = metadataList.encrypt_disk


export default function Page() { return (<>

    <Title>How to encrypt a partition with LUKS in Linux</Title>

    <Section sticky id="section--overview" title="Overview">

        <Paragraph>
            To encrypt a partition, disk or external storage unit we will use the standard LUKS to cipher our data.
        </Paragraph>
        <Quote title="Microsoft security team" color="#08e4">
            By encrypting our data we will protect it against: <i>data exposure, stolen or inappropiately decommisioned computers</i> 
        </Quote>

        <Callout label="danger">
            To encrypt a partition we will need to format it so all data will be lost, make sute to copy the important files elsewhere or make a backup of the entire partition
        </Callout>

        <Title3>Install packages</Title3>
        <Paragraph>
            Most linux installations already have this package but in other case, here you have the installation command
        </Paragraph>
        <Code>sudo apt-get install cryptsetup</Code>

        <Title3>Analyze partitions</Title3>
        <Paragraph>
            First of all we will need to make check the device path of the partition we want to encrypt, we will run the following command to check all the drives and partition detected by the machine
        </Paragraph>
        <Code caption="Output drives in TREE format">
            lsblk -T
        </Code>
        <Img img="https://i.gyazo.com/d141f8a673a37ba1bd0e5515cf14e394.jpg" title="Partitions tree"/>
        <Callout>For my example I will choose <Code inline>/dev/sdb1</Code> as the partition to encrypt</Callout>
    </Section>

    <br/>

    <Section sticky id="section--setup" title="Encryption setup">

        <Title3>Format the partition as LUKS</Title3>
        <Paragraph>
            We will format the partition choose to the LUKS format for encrypting partitions. Run the command, accept the warning and type your password
        </Paragraph>
        <Code>
            sudo cryptsetup luksFormat /dev/sdb1
        </Code>
        <Paragraph>
            Now we have our partition locked with an encryption
        </Paragraph>

        <Title3>Decrypt partition and format encrypted partition with a filesystem</Title3>
        <Paragraph>
            Once we have formated the partition as LUKS, we will have only formated the encrypted part, this stands to be the <i>outter</i> partition
        </Paragraph>
        <Paragraph>
            Now we will decrypt/open the partion to format a filesystem into a logical partition
        </Paragraph>
        <Quote title="Logical volumes" color="#8804">
            The concept of <i>logical volumes</i> allow us to have a <b>partition with more partitions inside</b>
            <br/><br/>
            When we encrypt a partition we will have an encrypted partition with it corresponding encription format, and this partition will have inside a <i>logical partition</i> where the <i>encrypted</i> data will be stored, this logical partition will need its own format to behave as a filesystem to store data
            <br/><br/>
            Logical parititions are represented in the devices path by the <Code inline>/dev/mapper/{"<name>"}</Code> path 
        </Quote>
        <Paragraph>
            With the following command we will decrypt the partition with our passphrase and create a logical partition called <Code inline>myLogicalPartition</Code>
        </Paragraph>
        <Code>
            sudo cryptsetup luksOpen /dev/sdb1 myLogicalPartition
        </Code>
        <Paragraph>
            Now we can check with <Code inline>lsblk -T</Code> our disk partition and we will see our logical partition inside the encrypted partition once it is decrypted
        </Paragraph>
        <Img img="https://i.gyazo.com/ebc7c16a04c88e704d937c044cc0b86e.jpg" title="Disk tree" ratio="9/1"/>
        <Paragraph>
            Now it is time to format the logical partition as <i>ext4</i> to start storing data inside it. Logical partitions are reprensented as devices inside the mapper directory
        </Paragraph>
        <Code caption="Formating logical volume as ext4">mkfs.ext4 /dev/mapper/myLogicalPartition</Code>

        <Title3>Mount logical volume</Title3>
        <Paragraph>
            finally to store data inside the logical partition we will mount it as any other partition wherever you want
        </Paragraph>
        <Code caption="Mounting the partition">
            <Gray># Create the mount path if needed</Gray><br/>
            mount /dev/mapper/myLogicalPartition /mnt/myData
        </Code>

    </Section>

    <br/>

    <Section sticky id="section--usage" title={"Open & Close encrypted partition"}>

        <Title3>Open/decrypt</Title3>
        <Paragraph>
            As we have seen before, we will need to decrypt the partition and them mount it to access it
        </Paragraph>
        <Code caption="Decrypt partition">
            cryptsetup luksOpen /dev/sdb1 myUnlockedData
        </Code>
        <Code caption="Mount partition">
            mount /dev/mapper/myUnlockedData /mnt/myData
        </Code>

        <Title3>Close/encrypt</Title3>
        <Paragraph>
            To close a partition we should unmount it first ensure that there are no running process using the partition, but it is not necesary to close it
        </Paragraph>
        <Code>
            umount /dev/mapper/myLogicalPartition
        </Code>
        <Paragraph>
            To close it we dont need to type whole device path, just the logical volume name
        </Paragraph>
        <Code>
            cryptsetup luksClose myLogicalPartition
        </Code>

    </Section>

    <br/>

    <Section sticky id="section--boot" title="Mount on boot">

        <Paragraph>
            As a final step, we might want to decrypt the partition while booting and also mount the logical volumen once the partition is decrypted automaticaly
        </Paragraph>

        <Paragraph>
            With the partition opened, we will take note of the UUID of the encrypted partition and the logical volumen inside
        </Paragraph>
        <Code>
            lsblk -o NAME,UUID
        </Code>
        <Img img="https://i.gyazo.com/c2764be1e839393280f0c91654f58897.jpg" title="Partitions UUIDs" ratio="3/1"/>

        <Title3>Decrypt partition</Title3>
        <Paragraph>
            This steps are for decrypting the partition while the boot proccess
        </Paragraph>
        <Paragraph>
            We will use the file <Code inline>/etc/crypttab</Code> to setup the partitions we want to decrypt <i>(if this file doesnt exist, create it)</i> 
        </Paragraph>
        <Paragraph>
            This configuration file is divided in rows to setup diferent partitions, and columns for the partition parameters
        </Paragraph>
        <UList items={[
            <><b>Logical device name</b> ~ This is the name we have used when decrypting a partition into a logical volume</>, 
            <><b>UUID or device path</b> ~ This is the UUID of the device or the device path</>, 
            <><b>Method of authentication</b> ~ Here we will type <i>none</i> if we want to use a passphrase as the authentication method, or the path of the key file (<i>method not recommended</i>)</>,
            <><b>Options</b> ~ Here we want set additional options: <i>Max tries, encrypt method, etc... (see manual for more)</i></>
        ]} />
        <Url target="_blank" title={<><Code inline>/etc/cripttab</Code> file docs</>} src="https://man7.org/linux/man-pages/man5/crypttab.5.html"/> 
        <Code caption="/etc/crypttab">
            <Gray># Instead of using the UUID I will use the device path, <br/># This is only recommended when the drive will be always connected to the machine, in other case, the device path may change eventualy</Gray><br/>
            myLogicalPartition      /dev/sdb1    none   luks<br/><br/>
            <Gray># This would be the example using an UUID</Gray><br/>
            <Gray># myLogicalPartition    UUID=6396b054-52b5-4c6e-ba54-1efc0faa7935    none   luks</Gray>
        </Code>

        <Title3>Mount logical volume</Title3>
        <Paragraph>
            This step is necesary to mount automaticaly the logical volumen once the encrypted partition is opened
        </Paragraph>
        <Paragraph>
            We will add to <Code inline>/etc/fstab</Code> the logical volume name, the mount point path, the filesystem format and other settings
        </Paragraph>
        <Code caption="/etc/fstab">
            myLogicalPartition      /mnt/myData     ext4    defaults    0 0
        </Code>
        <Url title={<><Code inline>/etc/fstab</Code> docs</>} description="Check this article about the fstab file for deeper information" src="https://www.fpgenred.es/GNU-Linux/etcfstab.html"/>
    </Section>

    <Callout>
        Now we have finished 🎉, now its time to <Code inline>reboot</Code> and check that everything works
    </Callout>


    <BubbleScrollBar sections={sections} />
</>)}

