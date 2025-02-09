import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { ArtPiece } from "../types/ArtPiece.ts"

interface ItemOverviewProps {
    item: ArtPiece;
}

export const ItemOverview: React.FC<ItemOverviewProps> = ({ item }) => {
    return (
        <Accordion>
            <AccordionPanel>
                <AccordionTitle>Item Overview</AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {item.description}
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Payment & Shipping</AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        After a successful bid, payments can be securely completed using major credit cards, PayPal, or direct bank transfer.
                        All artworks are carefully packaged and shipped within 5-7 business days following payment confirmation.
                        Domestic shipping typically takes 3-5 business days, while international shipments may require 7-14 business days, depending on the destination and customs clearance.
                        Tracking information is provided upon dispatch, ensuring you can monitor the journey of your new artwork from our studio to your door.
                        Please feel free to reach out with any questions or special requests regarding shipment options.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Terms</AccordionTitle>
                <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        By participating in our live auctions, you agree to bid responsibly and fulfill payment within 48 hours of a successful bid confirmation.
                        All sales are final. We take every measure to accurately represent each piece's color, quality, and dimensions, though slight variations may occur due to digital displays.
                        Any artwork damaged during shipment must be reported within 48 hours of receipt for review.
                        We are committed to protecting your privacy and using your information solely to complete your purchase and improve our services.
                        By using our platform, you accept our terms of service and privacy policy, available in full at the footer of this page.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}