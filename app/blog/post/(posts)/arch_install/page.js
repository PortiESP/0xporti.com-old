import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar"
import {Title, Title2, Title3, Title4, Link, Paragraph, UList, Img, Callout, Code, SubPage, Quote, Url, Toggle, Block, Hr, Section} from "@/components/MarkupWidgets/Tags.js"
import { Gray, Color } from "@/components/MarkupWidgets/tags/Colors"
import metadataList from "@/api/blog/postsData"

// Images
import image1 from "@/postsImages/arch_install/imager.png"
import relatedPostImg1 from "@/blogImages/thumbnails/linux_desktop.svg"

const sections = [
    {
        id: "section--download",
        label: "Download"
    },
    {
        id: "section--mount",
        label: "Mount ISO"
    },
    {
        id: "section--installation",
        label: "Installation"
    },
    {
        id: "section--setup",
        label: "Setup"
    },
]


export const metadata = metadataList.arch_install


export default function Page(){
    return (<>
        <Title>Download, install and setup of Arch Linux</Title>

        <Paragraph>
            Arch Linux is a lightweigh distribution of GNU/Linux, this distro is general purpose and it is characterized for installed with the minimal software necesary,
            so the user must install the software when it is required
        </Paragraph>
        <Paragraph>
            In this walktrough {"we'll"} follow the steps required to get <b>Arch Linux</b> installed in a <i>VM</i> or <i>native OS</i>
        </Paragraph>

        <Section sticky id="section--download" title="Download arch">

            <Url title="Arch official site" description="Official page to the 'archlinux' organization" src="https://archlinux.org/download/" src="https://i.gyazo.com/687a887319eb07b66202f2c321b47584.png"/>
            <Img src="https://i.gyazo.com/97eeeec469487443d9caae46fa1a0322.png" title="Arch site screenshoot" ratio="5/2"/>
            <Paragraph>
                Then scroll to the mirrors section and download from the one you prefer
            </Paragraph>
            <Img src="https://i.gyazo.com/6ebc2183fbb53f573e9948ed9ea00946.gif" title="Arch dowload gif" />
            <Paragraph>
                Once is downloaded we should then check the checksum of the downloaded file
                <br/><br/>
                The <b>checksums</b> are found on the same page as the mirrors
            </Paragraph>
            <Img src="https://i.gyazo.com/20f5324384a48ed2d69061cf12c23a5d.png" title="Checksums screenshoot" ratio="7/2"/>
            <Paragraph>
                I will look for MD5 and SHA1 hashes matching my file with the CMD command <Code inline>certutil</Code> , from the downloads path
            </Paragraph>
            <Code>
                <Gray># Calculate MD5 hash</Gray>
                <br/>
                certutil -hashfile archlinux-2022.08.05-x86_64.iso md5
                <br/><br/>
                <Gray># Calculate SHA1 hash</Gray>
                <br/>
                certutil -hashfile archlinux-2022.08.05-x86_64.iso sha1
            </Code>
            <Img src="https://i.gyazo.com/6f3edfc965913a85cdc533ae225e8192.png" title="Checksumms check screenshoot" />
            <Callout label="danger" labelData={{text: "Safety warning!"}}>Please, take a moment to go through this step to ensure that you are downloading a safe software</Callout>
            
        </Section>

        <br/>

        <Section sticky title="Mount ISO" id="section--mount">
            <Paragraph>
                The next step is mounting the ISO file to an external device, you can us the ISO mounting software you want
                <br/>
                In my case i will use the *Raspberry PI Imager*, this software is intended to be for installing Raspbian but it allows us to mount any ISO file and also because I trust the Raspbian developers so I will use their software
            </Paragraph>
            <Url title="Raspbian download page" description="Official page of the raspberry PI organization at its software download section" src="https://www.raspberrypi.com/software/" src="https://i.gyazo.com/821e1264a50d3c7249a871541c49d696.png"/>
            <Img src="https://i.gyazo.com/64bc08fa691f8475bc6a742b11e56d1f.png" title="Raspbian imager" />
            <Paragraph>
                To mount the Arch ISO on an external mass storage {"(USB)"} device we will choose the <Code inline>Choose OS</Code> option and then choose the <Code inline>Use custom</Code> option then look for the Arch ISO {"we’ve"} downloaded before, the choose the external device where to write the image and then click on write
            </Paragraph>
            <Img src={image1} title="Raspbian imager" />
            <Paragraph>
                Once the mounting finishes, the device will be automaticaly ejected
            </Paragraph>

        </Section>

        <br/>

        <Section sticky title="Install Arch" id="section--installation">
            
            <Callout label="warning">The installation process can change a little bit based on the device propperties but we will cover the common steps from our perspective</Callout>
            <Callout label="tip">Remember that you can use the following keys to interact with the graphical interfaces of some commands: <Code inline>ENTER</Code> to accept selected option, <Code inline>ESC</Code> to go back to the previous menu and <Code inline>↑</Code> , <Code inline>↓</Code> to navigate over the available options</Callout>

            <Paragraph>
                Now we will <b>insert the drive</b> {"(USB)"} in the PC where we want to install Arch and start it, in case you are using a virtual machine look how to insert virtual drive on it
            </Paragraph>
            <Img src="https://i.gyazo.com/c0b0da65776fadf5ccc9f69bffdabd54.gif" title="VM virtualbox gif" />

            <Paragraph>
                Once we have inserted the drive with the ISO mounted, reboot the PC and a screen similar to this should appear, hit ENTER over the <Code inline>Arch Linux install medium...</Code>
            </Paragraph>
            <Img src="https://i.gyazo.com/02e74f78fd8904d9bd8ad2578b7a3b25.png" title="Boot screen" />

            <Paragraph>
                The necesary software needed by the installator envionrement will start downloading...
            </Paragraph>
            <Callout label="info">
                Once the packages are installed we will be prompted with a terminal corresponding to a installation enviorement installed on the USB that acts as a live OS running on the USB with the sofware necesary to install Arch on the PC and get done the basic setup
            </Callout>
            <Img src="https://i.gyazo.com/e037a6e2195f04445bb2925a39187f8b.png" title="Installer terminal" ratio="5/2"/>
            <br/>
            
        </Section>

        <br/>

        <Section sticky title="Basic setup" id="section--setup">

        <Title3>Pre-setup steps</Title3>
            <Block>
                <Paragraph>This is the essential steps previous to the installation and setup</Paragraph>

                <Toggle title="Keyboard layout">
                    <Paragraph>
                        The first thing to do is setting-up the keyboard layout we are using, if we dont do this the machine will missunderstand most of the typed keys that
                    </Paragraph>
                    <Paragraph>
                        For this example {"I’m"} using the es parameter because I have an spanish keyboard, but you can use <Code inline>uk</Code> , <Code inline>us</Code> , <Code inline>de</Code> , etc…
                    </Paragraph>
                    <Code>
                    <Gray># Print available keyboard layouts</Gray>
                    <br/>
                    localectl list-keymaps
                    <br/>
                    <Gray># Load layout (es = spanish)</Gray>
                    <br/>
                    loadkeys es
                    </Code>
                    <Paragraph>
                        This is a temporal setting, we will set the permanent configuration later
                    </Paragraph>
                </Toggle>

                <Toggle title="Connect to WIFI" id="toggle--connect-wifi">
                    <Callout label="warning">
                        This step is only for wireless connections, if you are using ethernet connection or using a VM this step shouldn{"'"}t be necesary
                    </Callout>

                    <Paragraph>
                        To connect to nearby wireless access points we will use <Code inline>iwctl</Code>
                    </Paragraph>

                    <Code caption="Run tool CLI">
                        iwctl
                    </Code>
                    <Code caption="Scan APs around">
                        <Gray># List available interfaces</Gray><br/>
                        <Gray>{"[iwctl]#"}</Gray> device list<br/>
                        <Gray># Get a snapshoot of the nearby APs over the selected iface</Gray><br/>
                        <Gray>{"[iwctl]#"}</Gray> station wlan0 scan<br/>
                        <Gray># Print scan result</Gray><br/>
                        <Gray>{"[iwctl]#"}</Gray> station wlan0 get-networks
                    </Code>
                    <Img src="https://i.gyazo.com/58de1cc3beacb67942cbcd9f72ee7643.jpg" title="Networks list"  />
                    <Paragraph>
                        Choose the network SSID that you want to connect to and connect using the following command
                    </Paragraph>
                    <Code caption="Connect to WIFI">
                        <Gray>{"[iwctl]#"}</Gray> station wlan0 connect MOVISTAR_AC12
                    </Code>
                    <Paragraph>
                        To check if the connection was successful, execute this:
                    </Paragraph>
                    <Code caption="Check connection status">
                        <Gray>{"[iwctl]#"}</Gray> station wlan0 show
                    </Code>
                    <Paragraph>
                        If the field <i>connected network</i> is filled with our network SSID we have successfully connected to our network
                    </Paragraph>
                </Toggle>

                <Paragraph>
                    As a final step we will check if we have <b>internet</b> connection, we will try to <i>ping</i> google and observe the response
                </Paragraph>
                <Code caption="Check internet connection">
                    ping google.com
                </Code>
                <Paragraph>
                    Here we have the example of a <i>successful</i> ping and a <i>failed</i> ping request
                </Paragraph>
                <Img src="https://i.gyazo.com/608ca49dfecec9c30d3b5024cf1c8e4b.png" title="Successful ping" ratio="3/1"/> 
                <Img src="https://i.gyazo.com/5859cd93a2f2ab5334bfc2251acae1a7.png" title="Failed ping" ratio="3/1"/> 
            </Block>

            <Paragraph>
                The are two methods to get our Arch installation up and running, the easy one and the manual one. 
            </Paragraph>
            <Paragraph>
                With the <b>easy</b> installation we will use the command <Code inline>arch-install</Code> that is comes with the installer tools, this method uses a CLI tool that will make all the hard work for us and will promp to us the necesary configurations
            </Paragraph>
            <Paragraph>
                The <b>manual</b> method is basicaly follow all the steps necesary to download and setup the packages, drivers, language, user, etc… 
            </Paragraph>

            <Hr/>

            <SubPage title="Easy setup" small description={<>Install Arch using <Code inline>archinstall</Code> command</>}>
                <Paragraph>
                    This method uses the <Code inline>arch-install</Code> or <Code inline>archinstall</Code> <i>{"(depends on the installer)"}</i> to show the tool CLI where we will fill the necesary parameters
                </Paragraph>
                <Code>
                    archinstall
                </Code>
                <Img src="https://i.gyazo.com/18f334cc0cbec48d7a31ec11a62893d5.png" title="Archinstall menu"  />
                <Paragraph>
                    Follow this interface to configure you arch installation. Some of the parameters depend on the user, like the timezone, username, etc....<br/>
                    Here I have a few fields explained for you, <i>some of them will be explained in depth later</i>
                </Paragraph>
                <UList items={[
                    <><b>Archinstall language</b> ~ Set installer CLI language</>,
                    <><b>Keyboard layout</b> ~ Set the corresponding layout for your keyboard</>,
                    <><b>Mirror region</b> ~ Server from where the packages will be installed, choose the closest to your location</>,
                    <><b>Locale language</b> ~ System language</>,
                    <><b>Drive{"(s)"}</b> ~ Choose the drive (<i>Mass Storage device</i>)</>,
                    <><b>Encryption password</b> ~ Choose a password to encrypt the drive</>,
                    <><b>Bootloader</b> ~ Choose a bootloader</>,
                    <><b>Swap</b> ~ Set use swap, (<i>swap is not necesary now-a-days since most devices already have a RAM with at least 2GB</i>)</>,
                    <><b>Hostname</b> ~ Hostname of the machine</>,
                    <><b>Root password</b> ~ Set a password for the root user</>,
                    <><b>User account</b> ~ Create users, set passwords and sudo privileges</>,
                    <><b>Profile</b> ~ Install some predefined packages depending on the profile</>,
                    <><b>Audio</b> ~ Choose an audio manager</>,
                    <><b>Kernels</b> ~ Select the kernel drivers to install</>,
                    <><b>Additional packages</b> ~ Install additional packages apart from the ones by default and profile ones</>,
                    <><b>Network configuration</b> ~ Set how the network settings will be configured</>,
                    <><b>Timezone</b> ~ Setup the device timezone</>,
                    <><b>Automated time sync</b> ~ Automaticaly adjust clock</>,
                    <><b>Optional repositories</b> ~ Add extra repositories apart from the default for Arch</>,
                ]}/>
                
                <Toggle title="User specific configuration">
                    <Paragraph>
                        Fill the following fields with the parameters that fit the most your needs: <i>archinstall language, mirror region, audio, locale language, timezone, hostname, root password, user account.</i>
                    </Paragraph>
                </Toggle>

                <Toggle title="Network configuration">
                    <Paragraph>
                        Then fill the <Code inline>Network configuration</Code> field as <Code inline>Copy ISO configuration</Code>
                    </Paragraph>
                </Toggle>
            

                <Toggle title="Additional packages">
                    <Paragraph>
                        Add the following packages to <Code inline>Additional packages</Code>:
                    </Paragraph>
                    <Code>
                        firefox
                        wpa_supplicant
                        networkmanager
                        nano
                        vim
                        dhcpcd
                        sudo
                    </Code>
                    <Callout label="danger" labelData={{text:"Important"}}>
                        I <b>highly</b> recommend you installing at least the packages above to avoid future network issues
                    </Callout>
                </Toggle >

                <Toggle title="Drives and partition table">
                    <Paragraph>
                        The next step is choosing where we want to install the Arch OS, we will select <Code inline>Drive(s)</Code>, a list of all the mass storage devices detected will appear abd we will choose where we want to install the OS<br/>
                        In my case I am using a VM with 25GB of storage but for you it should appear your Hard Drive
                    </Paragraph>
                    <Img src="https://i.gyazo.com/e359f329a26aea5c146746b43e78580f.png" title="Drives option"  />
                    <br/>
                    <Img src="https://i.gyazo.com/366234667a6ec845175b9704a07fc7b9.png" title="Choosing my drive"  />
                    <Paragraph>
                        After choosing a drive, <Code inline>Disk layout</Code> option should be available:
                    </Paragraph>
                    <Img src="https://i.gyazo.com/a86b740a364ab011ef3acb9d587843f1.png" title="Disk layout option"  />
                    <Paragraph>
                        Now we will setup the partition table, since we are in the <i>{'"easy"'}</i> setup method, we wont take much time on this, we will use a suggested partition table<br/>
                    </Paragraph>
                    <Callout label="info">
                        We will cover how to create a partition table in deep in the <i>manual</i> method section, if you already know how to create one, feel free to create your own
                    </Callout>
                    <Paragraph>
                        Follow the next steps to create a <i>suggested</i> partition table (<i>disk layout</i>):
                    </Paragraph>
                    <Img src="https://i.gyazo.com/e8670532b42c527a59b8df588e0d2a92.png" title="Disk layout menu 1"  /><br/>
                    <Img src="https://i.gyazo.com/b8f7d7407222988abdbcd1099fc99726.png" title="Disk layout menu 2"  /><br/>
                    <Img src="https://i.gyazo.com/9a9147e455a9ba7438f67bf4a7f0ca21.png" title="Disk layout menu 3"  /><br/>
                    <Img src="https://i.gyazo.com/737edbe2c1c8b4b7b4332f3969a35456.png" title="Disk layout menu 4"  /><br/>
                    <Img src="https://i.gyazo.com/1cde1c6c0fe78be34462d9af3a5a2f6b.png" title="Disk layout menu 5"  /><br/>
                </Toggle>

                <Toggle title="Profile">
                    <Paragraph>This option will depend on every person and the purpose of that Arch installation</Paragraph>
                    <UList items={[
                        <><b>Default linux envionrement with desktop and some tools</b> ~ <Code inline>desktop</Code> → <Code inline>gnome</Code> → <Code inline>default</Code></>,
                        <><b>A linux enviorement with the graphic drivers installed but not a desktop GUI</b> ~ <Code inline>xorg</Code></>,
                        <><b>CLI linux enviorement for servers</b> ~ <Code inline>server</Code> → (<i>Select the software you want to install</i>)</>,
                    ]}/>
                </Toggle>

                <Paragraph>
                    This is my final configuration...
                </Paragraph>
                <Img src="https://i.gyazo.com/c6519b240dd42fd6d50304c1858bb252.png" title="Final arch setup"  /><br/>
                <Paragraph>
                    Then click install, if every thing is ok, a summary in JSON format should apper with all your configurations and the installation should start
                </Paragraph>

                <Callout label="warning">
                    The a message will prompt (would you like to chroot…) this is optional if you have followed the steps above, but you can do it if you want to check the settings made before rebooting, you can follow some step of the manual method from this point for additional configuration
                </Callout>
                <Img src="https://i.gyazo.com/89675f199d588835812fdc1049a5e37d.png" title="Chroot message" ratio="6/1" /><br/>
                <Paragraph>
                    If you have selected <Code inline>yes</Code> you will be returned to the terminal and here you can run <Code inline>chroot</Code>
                </Paragraph>
                <Code>
                    arch-chroot /mnt/archinstall
                </Code>
                
            </SubPage>

            <SubPage title="Manual setup" small description={<>Install Arch by configuring everything by hand</>}>
                <Paragraph>
                    For the manual setup we will need to configure several parameters, the first steps can be done from the live OS of the ISO and others by <Code inline>arch-chroot</Code> into the OS we have installed on the drive
                </Paragraph>

                <Toggle title="Disk partitions">
                    <Paragraph>
                        The first thing is check the path of the drive where we want to install Arch (hard drive)
                    </Paragraph>
                    <Code caption="List of available drives">
                        fdisk -l
                    </Code>
                    <Paragraph>
                        In my case I will install it in the <Code inline>sda</Code> drive of 25GB
                    </Paragraph>
                    <Img src="https://i.gyazo.com/c02e307c16d1090fef731364c7056af1.png" title="lsdik screenshoot"  />
                    <Paragraph>
                        Now its time to create a new partition table on the drive, you can create your own table if you know how to do it. My table for the example will be the following:
                    </Paragraph>
                    <Quote title="Partition layout I will create for the example">                       
                        ~ <Code inline>/dev/sda1</Code> <Gray># Boot 512MB</Gray><br/>
                        ~ <Code inline>/dev/sda2</Code> <Gray># Root 12GB</Gray><br/>
                        ~ <Code inline>/dev/sda3</Code> <Gray># Home 10GB</Gray><br/>
                        ~ <Code inline>/dev/sda4</Code> <Gray># Swap 1GB</Gray><br/>
                        <Gray># There are a few unused MBs</Gray>
                    </Quote>
                    
                    <Block>
                        <Toggle title="Create partition table">
                            <Paragraph>Open the <Code inline>fdisk</Code> CLI over the <Code inline>/dev/sda</Code> device (<i>Load the drive you want in your case</i>)</Paragraph>
                            <Code>
                                fdisk /dev/sav
                            </Code>
                            <Paragraph>
                                The tool CLI will be prompted, this CLI uses single letter as shortcuts for its options, follow the instructions in the right order (<i>dont copy the comments</i>)
                            </Paragraph>
                            <Code>
                                g               <Gray># Create new partition table</Gray>
                            </Code>
                            <Paragraph>
                                Now we have just created a new partition table, dont worry changes wont be applied until you save them so you can quit whenever you want
                            </Paragraph>
                            <Paragraph>Now we will start creating the different partitions</Paragraph>
                            <Callout label="tip">
                                Hit <Code inline>ENTER</Code> (<i>with an empty input</i>) to select the default values when any value is required
                            </Callout>
                            <Callout label="warning">
                                If an alert about a removing a <b>signature</b> prompts, just choose <Code inline>Yes</Code>
                            </Callout>
                            <Title4>EFI Partition</Title4>
                            <Code caption="Commands to create EFI partition">
                                n                         <Gray># Add new partition</Gray><br/>
                                ENTER(default)            <Gray># Partition number</Gray><br/>
                                ENTER(default)            <Gray># Start block</Gray><br/>
                                +1G                       <Gray># End block (Size 1GB)</Gray><br/>
                                <Gray># By this point the signature message might prompt, choose <i>Yes</i></Gray><br/>
                                t                         <Gray># Change partition type</Gray><br/>
                                1                         <Gray># Select partition type (EFI)</Gray>
                            </Code>
                            <Title4>Root Partition</Title4>
                            <Code caption="Commands to create root partition">
                                n                         <Gray># Add new partition</Gray><br/>
                                ENTER(default)            <Gray># Partition number</Gray><br/>
                                ENTER(default)            <Gray># Start block</Gray><br/>
                                +12G                      <Gray># End block (Size 12GB)</Gray><br/>
                                t                         <Gray># Change partition type</Gray><br/>
                                ENTER(default)            <Gray># Select partition number</Gray><br/>
                                23                        <Gray># Select partition type (Linux root x86-64)</Gray>
                            </Code>
                            <Title4>Home Partition</Title4>
                            <Code caption="Commands to create home partition">
                                n                         <Gray># Add new partition</Gray><br/>
                                ENTER(default)            <Gray># Partition number</Gray><br/>
                                ENTER(default)            <Gray># Start block</Gray><br/>
                                +10G                      <Gray># End block (Size 10GB)</Gray><br/>
                                t                         <Gray># Change partition type</Gray><br/>
                                ENTER(default)            <Gray># Select partition number</Gray><br/>
                                41                        <Gray># Select partition type (Linux home)</Gray>
                            </Code>
                            <Title4>Swap Partition</Title4>
                            <Code caption="Commands to create swap partition">
                                <Gray># This partition is optional nowadays</Gray><br/>
                                n                         <Gray># Add new partition</Gray><br/>
                                ENTER(default)            <Gray># Partition number</Gray><br/>
                                ENTER(default)            <Gray># Start block</Gray><br/>
                                +1G                       <Gray># End block (Size 1GB)</Gray><br/>
                                t                         <Gray># Change partition type</Gray><br/>
                                ENTER(default)            <Gray># Select partition number</Gray><br/>
                                19                        <Gray># Select partition type (Linux swap)</Gray>
                            </Code>

                            <Paragraph>
                                Check the table partitions 
                            </Paragraph>
                            <Code>
                                p                        <Gray># Print partion table</Gray><br/>
                            </Code>
                            <Img src="https://i.gyazo.com/9f1bc8435fe0a9c5c19294efedb0fc54.png" title="Example partition table" ratio="2/1"/>
                            
                            <Paragraph>
                                If everything looks right, its time save the changes
                            </Paragraph>
                            <Code>
                                w                        <Gray># Save partition table for the selected drive</Gray><br/>
                            </Code>

                        </Toggle>

                    

                        <Toggle title="Format partitions">
                            <Paragraph>
                                Now we have to format the partions we have just created, remember replacing <Code inline>sda</Code> with the drive you are using to follow this tutorial
                            </Paragraph>
                            <Code caption="Formatting partitions">
                                mkfs.fat -F32 /dev/sda1   <Gray># Format partition 1 (EFI) as FAT32</Gray><br/>
                                mkfs.ext4 /dev/sda2       <Gray># Format partition 2 (root) as ext4</Gray><br/>
                                mkfs.ext4 /dev/sda3       <Gray># Format partition 3 (home) as ext4</Gray><br/>
                                mkswap /dev/sda4          <Gray># Format partition 4 (swap) as swap</Gray><br/>
                                swapon                    <Gray># Enable swap</Gray>
                            </Code>
                        </Toggle>

                        <Toggle title="Mount OS filesystem">
                            <Paragraph>
                                Now its time to mount the filesystem on the current <i>live OS</i> to chroot on it
                            </Paragraph>
                            <Code>
                                mount /dev/sda2 /mnt               <Gray># Mount root partition</Gray><br/>
                                mkdir /mnt/boot/                   <Gray># Create boot dirs</Gray><br/>
                                mkdir /mnt/boot/efi                <Gray># Create boot dirs</Gray><br/>
                                mount /dev/sda1 /mnt/boot/efi      <Gray># Mount part1 as boot partition</Gray><br/>
                                mkdir /mnt/home                    <Gray># Create home folder on filsesytem</Gray><br/>
                                mount /dev/sda3 /mnt/home          <Gray># Mount home partition</Gray>
                            </Code>
                        </Toggle>

                    </Block>
                </Toggle>

                <Toggle title="Install kernel drivers and tools">
                    <Code>pacstrap /mnt base base-devel linux linux-firmware nano sudo zsh</Code>
                    <Paragraph><i>This process will take a while ( under 5 mins )...</i></Paragraph>
                </Toggle>

                <Paragraph>
                    Now we will generate a summary of the partition table and store it on the Arch system for later configure the bootloader
                </Paragraph>
                <Code>
                    genfstab -U /mnt {">>"} /mnt/etc/fstab   <Gray># Generate partition table summary and copy to a specific file</Gray>
                </Code>

                <br/>
                <Hr/>

                <Quote title={<>{"Time to "}<Code inline>arch-chroot</Code></>}>
                    Now we will use chroot to access the mounted drive filesystem, this way we will be able to make some configurations as root in the arch installation before rebooting into the final system
                    <Code>
                        arch-chroot /mnt                          <Gray># Login the mounted filesystem</Gray>
                    </Code>
                </Quote>

                <Hr/>

                <Toggle title="Sort repos">
                    <Paragraph>This setting is for creating a list of repositories in order of proximity for a better download rate</Paragraph>
                    <Paragraph>We will make a copy of the current list of repos in case of something goes wrong</Paragraph>
                    <Code caption="Backup of the repos list">
                        cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
                    </Code>
                    <Code caption="Creating new list">
                        pacman -S reflector<br/>
                        <Gray># (Run as root) Look for servers in spain, france or germany, syncronized in the last 24 hours, only over HTTPS and sorted</Gray><br/>
                        # reflector -c Spain -c France -c Germany --age 24 --protocol https --sort rate --latests 30 --save /etc/pacman.d/mirrorlist --verbose
                    </Code>
                </Toggle>


                <Toggle title="Setup bootloader">
                    <Code caption="Setup GRUB bootloader">
                        pacman -S grub efibootmgr<br/>
                        grub-install /dev/sda<br/>
                        <br/>
                        grub-mkconfig -o /boot/grub/grub.cfg<br/>
                        mkinitcpio -P
                    </Code>
                    <Img src="https://i.gyazo.com/1fc375d53292bb937aaf53411701bd10.jpg" title="Successful grub installation" />
                    <Paragraph>In case of <b>issues</b> installing the bootloader I recommend you look here:</Paragraph>
                    <Url title="GRUB Troubleshooting" description="A post where some users explain some issues with GRUB" src="https://i.gyazo.com/09d59b381cc8fe5ba852b7b08d1007c6.png" src="https://unix.stackexchange.com/questions/405472/cannot-find-efi-directory-issue-with-grub-install" />
                </Toggle>


                <Toggle title="System language">
                    <Paragraph>First we need to uncomment the language on the <Code inline>/etc/locale.gen</Code> file list of languages</Paragraph>
                    <Code>
                        nano /etc/locale.gen
                    </Code>
                    <Callout label="tip">You can use <Code inline>CTRL+W</Code> to search for strings in the file, <Code inline>CTRL+S</Code> to save changes and <Code inline>CTRL+C</Code> to exit editor while using <Code inline>nano</Code></Callout>
                    <Img src="https://i.gyazo.com/daf9f52e5eda0e122c21bb24de4ecf54.png" title="Language uncommented" ratio="5/1" />
                    <Paragraph>Then execute the next command to generate the data for the uncommented files</Paragraph>
                    <Paragraph>In the example I have uncommented the spanish language</Paragraph>
                    <Code caption="Config system language">
                        locale-gen                                   <Gray># Generate data for the uncommented languages</Gray><br/>
                        {'echo "LANG=es_ES.UTF-8" > /etc/locale.conf'}   <Gray>{'# Replace "es_ES.UTF-8" with your uncommented language'}</Gray><br/>
                    </Code>
                </Toggle>


                <Toggle title="Users config">
                    <Code>
                        <Gray># Set a password for root</Gray><br/>
                        passwd root
                    </Code>
                    <Code>
                        <Gray># Create user and password</Gray><br/>
                        useradd -m -G wheel MY_USER -p MY_PASSWORD<br/>
                        <Gray># Or skip {"'-p'"} and add a password by:</Gray><br/>
                        passwd MY_USER
                    </Code>
                </Toggle>


                <Toggle title="Timezone">
                    <Paragraph>Follow the tool CLI instructions when executing the next command</Paragraph>
                    <Code caption="Timezone setup">
                        tzselect<br/>
                        <Gray># Once you have finished, copy the following line with root and every user to setup permanent timezone settings (use your own timezone)</Gray><br/>
                        echo {'"'}TZ={"'Europe/Madrid'"}; export TZ{'"'} {">>"} ~/.bash_profile

                    </Code>
                </Toggle>


                <Toggle title="Hostname and hosts">
                    <Title4>Configuring hostname</Title4>
                    <Code>
                        echo MY_HOSTNAME {">"} /etc/hostname<br/>
                        <Gray># or</Gray><br/>
                        hostnamectl set-hostname MY_HOSTNAME
                    </Code>
                    <Title4>Configuring hosts file</Title4>
                    <Code>nano /etc/hosts</Code>
                    <Code caption="/etc/hosts">
                        127.0.0.1     localhost<br/>
                        ::1           localhost<br/>
                        127.0.1.1     MY_HOSTNAME<br/>
                        ::1           MY_HOSTNAME
                    </Code>
                </Toggle>


                <Toggle title="Configure sudo">
                    <Paragraph>Open the sudoers file using <Code inline>nano</Code> as the editor by adding an enviorement variable for <Code inline>EDITOR</Code></Paragraph> 
                    <Code caption="Edit the sudoers file with nano">
                        EDITOR=nano visudo
                    </Code>
                    <Paragraph>Then <b>uncomment</b> one the following lines. <i>This will allow the users member of the <Code inline>wheel</Code> group to execute commands as root</i></Paragraph>
                    <Code caption="Allow sudo but with user password">
                        %wheel ALL=(ALL:ALL) ALL
                    </Code>
                    <Code caption="Allow sudo without providing any password">
                        %wheel ALL=(ALL:ALL) NOPASSWD: ALL
                    </Code>
                </Toggle>


                <Toggle title="Download packages">
                    <Code caption="Basic packages download">
                        <Gray># Suggested packages (optional, download the ones you want)</Gray><br/>
                        pacman -S vim openssl git code<br/>
                        <Gray># Linux kernel for recovery (optional)</Gray><br/>
                        pacman -S linux-lts linux-lts-headers <br/>
                    </Code>
                </Toggle>


                <Toggle title="Setup network">
                    <Code>
                        pacman -S iwd networkmanager wpa_supplicant dhcpcd wireless_tools netctl dialog<br/>
                        systemctl enable NetworkManag er.service wpa_supplicant
                    </Code>
                </Toggle>


                <Toggle title="Configure keyboard layout">
                    <Paragraph>
                        With this step we will set the keyboard layout for the Arch installation, the very first step ( <Code inline>loadkeys es</Code> ) was to set the layout for the installer
                    </Paragraph>
                    
                    <Code>
                        nano /etc/vconsole.conf
                    </Code>
                    <Paragraph>
                        Add the following line to <Code inline>/etc/vconsole.conf</Code> for <i>spanish</i> keyboard layout
                    </Paragraph>
                    <Code caption="/etc/vconsole.conf">
                        KEYMAP=es
                    </Code>
                </Toggle>
                


                <Paragraph>Once we have finished the configuration process we will exit chroot</Paragraph>
                <Code>
                    exit
                </Code>

            </SubPage>

            <Hr/>

            <Callout label="info">You can <Code inline>reboot</Code> now, but <b>remember</b> to remove the installation device (USB), otherwise you will get into the installer boot menu again, if this happens just remove the drive and reboot again</Callout>

            <Paragraph>If everything if correct, Arch should be 🎉 <Color lightblue><b>installed and running</b></Color> 🎉</Paragraph>

            <Paragraph>Once we have started up the PC the Arch boot screen will prompt, just select <b>Arch Linux</b> to start your new Arch Linux OS</Paragraph>
            <Img src="https://i.gyazo.com/e46130a57cb8f86c7130b801d987c7bd.jpg" title="Arch boot screen"/>

            <Toggle title="WIFI troubleshooting">
                <Paragraph>If something goes wrong with the wireless connection we might need to configure manualy</Paragraph>
                
                <Paragraph>Execute the following commands:</Paragraph>
                <Code>
                    systemctl enable iwd.service
                    systemctl start iwd.service
                    systemctl enable systemd-resolved.service
                    systemctl start systemd-resolved.service
                </Code>

                <Paragraph>Then add the following lines to the <Code inline>/etc/iwd/main.conf</Code> file</Paragraph>
                <Code caption="Open file with nano editor">nano /etc/iwd/main.conf</Code>
                <Code caption="/etc/iwd/main.conf">
                    [General]<br/>
                    EnableNetworkConfiguration=true<br/>
                    <br/>
                    [Network]<br/>
                    NameResolvingService=systemd
                </Code>

                <Callout>Now execute <Code inline>iwctl</Code> and repeat the same process we followed before. <Link href="#toggle--connect-wifi">Go to WIFI   configuration</Link></Callout>

                <Paragraph>Then ensure that the DCHP service is enabled</Paragraph>
                <Code caption="DHCP setup">
                    systemctl enable dhcpcd<br/>
                    systemctl start dhcpcd
                </Code>

                <Callout label="warning">If you still have issues with the wireless connection after rebooting this might help: <Link target="_blank" href="https://www.linuxbabe.com/command-line/ubuntu-server-16-04-wifi-wpa-supplicant">guide</Link></Callout>
            </Toggle>

        </Section>

        <Hr/>

        <Title2>Related posts</Title2>

        <Url title="Install a desktop" description="Small guide about how to install a desktop enviorement in your new Arch Linux installation" src="/blog/linux-desktop" img={relatedPostImg1}/>

        <Callout label="info">
            <b>New posts</b> comming soon about how to improve your linux enviorement: <i>zsh, powerlevel10k, kitty, FzF, Neovim, etc...</i>
        </Callout>

        <BubbleScrollBar sections={sections}/>
    </>)
}