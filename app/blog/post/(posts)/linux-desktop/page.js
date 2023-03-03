import { Callout, Code, Paragraph, Section, Title, Toggle, UList } from "@/components/MarkupWidgets/Tags";
import { Gray } from "@/components/MarkupWidgets/tags/Colors";
import metadataList from "@/api/blog/postData"


export const metadata = metadataList.linux_desktop


export default function Page(){ return (
    <>
        <Title>Install a desktop GUI on linux</Title>

        <Paragraph>This post will cover the steps needed to install a desktop enviorement in a device with linux</Paragraph>

        <Section title="Overview">

            <Paragraph>
                When dealing with graphical interfaces we must know the following concepts:
            </Paragraph>
            <Callout>
                <b>GUI/Window managers:</b> This is the program that will control the appereance of the windows and desktop, graphical interface, widgets on the screen, themes, etc...
            </Callout>
            <Callout>
                <b>Desktop manager:</b> This program manage the login screen before GUI is started so we can have many GUIs installed and choose the one to use from here, some desktop manager come preinstalled  but others use the well-known ones like: <i>sddm</i>
            </Callout>

        </Section>

        <br/>

        <Section title="GUI manager">

            <Paragraph>Before install any GUI, we have to install the program that acts like the backbone of any GUI by managing the device drivers, the interactivity of the windows, device events API for other <i><b>window managers</b></i>, this program is: <Code inline>xorg</Code></Paragraph>
            <Callout label="warning">
                Remember to install with the tools with packet manager of your linux distro, im using <i>Arch Linux</i> so my packet manager is <Code inline>pacman</Code>
            </Callout>
            <Code caption="Snippet for ubuntu, debian, etc..">
                apt-get install xorg xorg-server xorg-init
            </Code>
            <Code caption="Snippet for Arch">
                pacman -S xorg xorg-server xorg-init
            </Code>

        </Section>

        <br/>

        <Section title="GUIs / Window managers">

            <Paragraph>There are many window manager programs, some of the are for general purpose, others are light-weight for optimization, etc..; Some of them will have a desktop manager incorporated but other will require to install one apart from the window manager</Paragraph>

            <Toggle title="Gnome">
                <Paragraph>Gnome is a simple and general purpose window manager, this one is the most popular option for the defult GUI on many Linux distros, it has included many tools by default so we dont have to care too much about setup</Paragraph>
                <Code>
                    pacman -S gnome <Gray># Download GUI (re execute it some packages doesnt download)</Gray><br/>
                    pacman -S gnome-tweaks <Gray># Optional for gnome (gives more control over the config of gnome)</Gray><br/>
                    systemctl enable gdm.service <Gray># Enable desktop for start automaticaly on boot</Gray><br/>
                    systemctl start gdm.service <Gray># Force start GUI now</Gray><br/>
                </Code>
            </Toggle>

            <Toggle title="Plasma (Kde)">
                <Code>
                    pacman -S plasma-meta kde-applications<br/>
                    systemctl enable sddm
                    systemctl start sddm
                </Code>
            </Toggle>

            <Toggle title="Xface">
                <Code>
                    pacman -S xfce4 xfce4-goodies   <Gray># Download window manager</Gray><br/>
                    pacman -S lightdm lightdm-gtk-greeter   <Gray># Download desktop manager</Gray><br/>
                    systectl enable lightdm 
                    systectl start lightdm 
                </Code>
            </Toggle>

            <Callout label="info">You must know that this GUIs have their own config files so settings like the <b>keyboard layout</b> we have setted-up for the Linux terminal we will need to configure also for the GUI, this is easy since we can do it from the graphical interface</Callout>

            <Paragraph>If you have starter the desktop manager service you should have already your GUI ready, in other case <Code inline>reboot</Code> your system to load the changes</Paragraph>

            <Callout>🎉 Congratulations 🎉, you desktop is now installed and working</Callout>
        </Section>
    </>
)}