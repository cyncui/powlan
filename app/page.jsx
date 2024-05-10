"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import headerImage from "../public/header.jpg";
import logo from "../public/logo.png";
import logoLight from "../public/logo_light.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="header-image">
        {/* <Image src={logo} className="mb-4 logo-image" alt="Powlan Logo." /> */}
      </div>
      <main className="flex min-h-screen flex-col items-start justify-start px-8">
        <div className="about flex flex-col justify-start items-end mb-36">
          <p className="about-team">
            At Powlan, we&apos;re a team of passionate IT specialists dedicated
            to empowering businesses with technology solutions that work. We
            believe in the transformative power of IT, and our mission is to
            bridge the gap between your vision and its technical execution.
          </p>
        </div>

        <div className="set-us-apart mb-24">
          <h3 className="mb-4">Here&#39;s what sets us apart:</h3>

          <div className="flex flex-row section-cards">
            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Experience & Expertise</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  Our team boasts a proven track record in network design, data
                  center implementation, security architecture, and a wide range
                  of IT services. We&apos;re well-versed in industry best
                  practices and keep ourselves updated with the latest
                  advancements in technology.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Holistic Approach</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  We go beyond simply providing piecemeal solutions. We take a
                  holistic view of your IT infrastructure, understanding your
                  unique needs and challenges to craft comprehensive strategies
                  that align with your business goals.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-[360px] skill-card">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Collaborative Partnership</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  We believe in building strong, collaborative relationships
                  with our clients. We work closely with you at every step,
                  ensuring clear communication and transparency throughout the
                  entire process.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="services mb-24">
          <h3 className="mb-2">Our Services</h3>
          <p className="mb-8">
            We offer a comprehensive suite of IT services designed to optimize
            your technology infrastructure and empower your workforce:
          </p>

          <div className="flex flex-row mb-10 section-cards">
            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Network & Datacenter</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  From design and implementation to ongoing maintenance, we
                  ensure your network and data center run smoothly and
                  efficiently.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Security Solutions</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  We create robust security architectures to safeguard your
                  valuable data and systems against evolving threats.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Office Automation</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  We streamline your daily operations with efficient office
                  automation solutions, enhancing productivity and
                  collaboration.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="flex flex-row mb-10 section-cards">
            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">
                    Device and Data Management
                  </p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  We implement proactive device management strategies, including
                  MDM and VDI, to ensure all devices are secure, compliant, and
                  up-to-date. Help your organization keep data secure and meet
                  all compliance requirements.
                </p>
              </CardBody>
            </Card>

            <Card className="max-w-[360px] skill-card mr-10">
              <CardHeader className="flex gap-3 mb-4">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="../public/next.svg"
                width={40}
              /> */}
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Server Management</p>
                </div>
              </CardHeader>
              <Divider className="card-divider mb-4" />
              <CardBody>
                <p className="card-body">
                  Our experts provide comprehensive management of Windows and
                  Linux servers, ensuring their optimal performance and
                  security.
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="lg:w-10/12">
            <p>
              We understand that every business has unique IT needs. We take the
              time to understand your specific requirements and tailor our
              services to deliver solutions that are both effective and
              cost-efficient.
            </p>
          </div>
        </div>

        <div className="footer">
          <h3 className="mb-2">
            Ready to take your IT infrastructure to the next level?
          </h3>
          <p className="mb-4">
            Contact us today for a free consultation and let&apos;s discuss how
            we can help your business thrive in today&apos;s ever-evolving
            technological landscape.
          </p>
          <Button
            className="contact-button"
            onClick={() => router.push("mailto:barryy@powlan.com")}
          >
            Contact Us
          </Button>
        </div>
        <div className="flex justify-end w-full">
          <Image
            src={logoLight}
            className="mb-4 logo-image"
            alt="Powlan Logo."
          />
        </div>
      </main>
    </>
  );
}
